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
                <p>活动内容：即日起会员于棋牌游戏当日有效投注2137元+，次日即可获得棋牌得意金，祝您“棋”开得胜，最高可获<span class="note-text">7137元彩金</span>！</p>
                <div class="table-box">
                    <table>
                        <thead>
                            <tr>
                                <th class="t-title" width="20%"><b>单日有效投注</b></th>
                                <th class="t-title" width="20%"><b>棋牌得意金</b></th>
                                <th class="t-title" width="25%"><b>派送方式</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="t-content">2137+</td>
                                <td class="t-content">5元</td>
                                <td class="t-content" rowspan="7">每天早上8:00到24:00开放领取</td>
                            </tr>
                            <tr>
                                <td class="t-content">1万+</td>
                                <td class="t-content">17元</td>
                            </tr>
                            <tr>
                                <td class="t-content">5万+</td>
                                <td class="t-content">57元</td>
                            </tr>
                            <tr>
                                <td class="t-content">10万+</td>
                                <td class="t-content">137元</td>
                            </tr>
                            <tr>
                                <td class="t-content">50万+</td>
                                <td class="t-content">737元</td>
                            </tr>
                            <tr>
                                <td class="t-content">200万+</td>
                                <td class="t-content">2137元</td>
                            </tr>
                            <tr>
                                <td class="t-content">500万+</td>
                                <td class="t-content">7137元</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    <span class="note-text">例：</span> 会员于开元棋牌游戏中投注50万元，次日即可领取737元棋牌得意金。<br />
                    参加方式：登录账号 》优惠 》活动页面领取
                </p>

                <!-- CTA -->
                <div class="flex-center">
                    <a v-if="isVisible" @click="sendEvent()" id="actionBtn" class="main-button btn-round flex-center" :class="buttonClass">{{ buttonText }}</a>
                </div>
                <!-- CTA end -->
            </div>
            <div class="promo-content">
                <div class="flex-center"><img class="img-title" src="../../public/images/promo_title2.svg" /></div>

                <ol class="rules">
                    <li>所获彩金仅需<span class="note-text">一倍流水</span>即可取款；</li>
                    <li>符合领取条件的会员请在次日24小时内进行领取，逾期将无法领取该优惠。</li>
                    <li>对于各种非正常投注行为，如无风险投注、对冲等—经发现将取消优惠资格</li>
                    <li>此活动只适用于拥有一个账户的会员；每一位用户，每一个住址、每一个电话号码、相同支付方式及IP地址仅限享受一次。</li>
                    <li>为避免文字差异，平台保留对本活动的最終解释权，并且有权更改．延迟或取消活动。</li>
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
    console.log('ff_promo_10', props.msg)
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
