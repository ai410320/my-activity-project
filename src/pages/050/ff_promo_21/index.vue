<template>
    <div id="ui-promo-detail" class="outer">
        <div class="kv">
            <div class="slogan relative">
                <img class="slogan-pc" src="./img/slogan_pc.webp" />
                <img class="slogan-h5" src="./img/slogan_h5.webp" />
                <div class="absolute promotion-time-range label-position mt-px--35 left-px-15 text-nowrap align-items-center label-font-size px-2 text-secondary l-spacing-0">
                    <div id="timeRange">{{ rangeDescription }}</div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="promo-content">
                <div class="flex-center"><img class="img-title" src="../../public/images/promo_title1.svg" /></div>
                <p><span class="text-highlight">活动内容：</span>会员于<span class="platform-name">五彩堂</span>电子游艺中，只要单个注单派彩金额超过500元，即可获得加赠彩金最高17777元！</p>
                <div class="table-box">
                    <table>
                        <thead>
                            <tr>
                                <th class="t-title"><b>单注派彩金额</b></th>
                                <th class="t-title"><b>加赠彩金</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="t-content">500+</td>
                                <td class="t-content">27元</td>
                            </tr>
                            <tr>
                                <td class="t-content">1000+</td>
                                <td class="t-content">57元</td>
                            </tr>
                            <tr>
                                <td class="t-content">2000+</td>
                                <td class="t-content">87元</td>
                            </tr>
                            <tr>
                                <td class="t-content">5000+</td>
                                <td class="t-content">157元</td>
                            </tr>
                            <tr>
                                <td class="t-content">10000+</td>
                                <td class="t-content">307元</td>
                            </tr>
                            <tr>
                                <td class="t-content">30000+</td>
                                <td class="t-content">907元</td>
                            </tr>
                            <tr>
                                <td class="t-content">100000+</td>
                                <td class="t-content">2777元</td>
                            </tr>
                            <tr>
                                <td class="t-content">200000+</td>
                                <td class="t-content">3777元</td>
                            </tr>
                            <tr>
                                <td class="t-content">500000+</td>
                                <td class="t-content">7777元</td>
                            </tr>
                            <tr>
                                <td class="t-content">1000000+</td>
                                <td class="t-content">17777元</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><span class="note-text">例：</span>会员在“糖果派对-极速版”游戏中下注50元，派彩10000元，即可申请307元加赠彩金！</p>
                <!-- CTA -->
                <div class="flex-center">
                    <a v-if="isVisible" @click="sendEvent()" id="actionBtn" class="main-button btn-round flex-center" :class="buttonClass">{{ buttonText }}</a>
                </div>
                <!-- CTA end -->
            </div>
            <div class="promo-content">
                <div class="flex-center"><img class="img-title" src="../../public/images/promo_title2.svg" /></div>
                <ol class="rules">
                    <li>所获得彩金只需1倍流水方可申请提款；</li>
                    <li>每天可申请1次，每个注单仅限申请1次，天数按照美东时间进行计算。</li>
                    <li>所中奖的注单需在24点前进行申请，逾期视为自动放弃优惠。</li>
                    <li>电子游艺中赠送给您的免费抽奖机会所产生的注单，并不作为参与本次活动的有效注单，以及任何原因投注额小于1元，均不具备参与本次活动。</li>
                    <li>对于各种非正常投注行为，如无风险投注、对冲等—经发现将取消优惠资格。</li>
                    <li>此活动只适用于拥有一个账户的会员；每一位用户，每一个住址、每一个电话号码、相同支付方式及IP地址仅限享受一次。</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import '../../style.css'
const props = defineProps({
    msg: Object,
})
const emit = defineEmits(['updateClick'])

const sendEvent = () => {
    console.log('testtest', props.msg)
    emit('updateClick', '按鈕被點擊')
}

onMounted(() => {
    console.log('ff_promo_21', props.msg)
    if (props.msg?.btnText) {
        isVisible.value = true
    }
})
const isVisible = ref(false)
const buttonText = computed(() => {
    return props.msg?.btnText
})
const btnStatus = computed(() => {
    return props.msg?.btnStatus
})
const activityDuration = computed(() => {
    return props.msg?.activityDuration
})
const rangeDescription = computed(() => {
    if (activityDuration.value == 1) {
        return '长期活动'
    } else if (activityDuration.value == 2) {
        return `${dateFormat(props.msg?.activityStartTime)}至${dateFormat(props.msg?.activityEndTime)}`
    }
})
// 計算按鈕的 class
const buttonClass = computed(() => {
    if (btnStatus.value === 3) return 'btn-disabled'
    if (btnStatus.value === 2) return 'btn-opacity'
    return 'btn-effect'
})

const dateFormat = (timeStamp) => {
    const date = new Date(timeStamp)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    console.log(`${year}-${month}-${day}`)
    console.log(timeStamp)
    return `${year}-${month}-${day}`
}
</script>
