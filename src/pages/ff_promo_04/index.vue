<template>
    <div id="ui-promo-detail" class="outer">
        <div class="kv">
            <div class="slogan relative">
                <img class="slogan-pc" src="./img/slogan_pc.webp" />
                <img class="slogan-h5" src="./img/slogan_h5.webp" />
                <div class="absolute promotion-time-range label-position mt-px--35 left-px-15 text-nowrap align-items-center label-font-size px-2 text-secondary l-spacing-0">
                    <div id="timeRange"></div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="promo-content">
                <div class="flex-center"><img class="img-title" src="./img/promo_title1.svg" /></div>
                <p><span class="text-highlight">活动内容：</span>活动期间，会员在【电子游艺厅】<span class="note-text">周累计投注</span>额达到相应等级，即可<span class="note-text">获得相应彩金</span>。</p>
                <div class="table-box">
                    <table>
                        <thead>
                            <tr>
                                <th class="t-title" width="20%"><b>阶梯</b></th>
                                <th class="t-title" width="50%"><b>周有效投注额</b></th>
                                <th class="t-title" width="30%"><b>奖励金额</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="t-content">1</td>
                                <td class="t-content">3000</td>
                                <td class="t-content">8</td>
                            </tr>
                            <tr>
                                <td class="t-content">2</td>
                                <td class="t-content">5000</td>
                                <td class="t-content">18</td>
                            </tr>
                            <tr>
                                <td class="t-content">3</td>
                                <td class="t-content">10000</td>
                                <td class="t-content">38</td>
                            </tr>
                            <tr>
                                <td class="t-content">4</td>
                                <td class="t-content">30000</td>
                                <td class="t-content">108</td>
                            </tr>
                            <tr>
                                <td class="t-content">5</td>
                                <td class="t-content">50000</td>
                                <td class="t-content">188</td>
                            </tr>
                            <tr>
                                <td class="t-content">6</td>
                                <td class="t-content">100000</td>
                                <td class="t-content">288</td>
                            </tr>
                            <tr>
                                <td class="t-content">7</td>
                                <td class="t-content">300000</td>
                                <td class="t-content">388</td>
                            </tr>
                            <tr>
                                <td class="t-content">8</td>
                                <td class="t-content">500000</td>
                                <td class="t-content">888</td>
                            </tr>
                            <tr>
                                <td class="t-content">9</td>
                                <td class="t-content">1000000</td>
                                <td class="t-content">1388</td>
                            </tr>
                            <tr>
                                <td class="t-content">10</td>
                                <td class="t-content">3000000</td>
                                <td class="t-content">3888</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- CTA -->
                <div class="flex-center">
                    <a v-if="isVisible" id="actionBtn" class="main-button btn-round flex-center" :class="buttonClass">{{ buttonText }}</a>
                    <a @click="detailClick()" class="main-button btn-round flex-center">領取測試試試試試</a>
                    {{ props.msg }}
                    {{ isVisible }}{{ rangeDescription }} {{ activityStartTime }} {{ buttonClass }}
                </div>
                <!-- CTA end -->
            </div>
            <div class="promo-content">
                <div class="flex-center"><img class="img-title" src="./img/promo_title2.svg" /></div>

                <ol class="rules">
                    <li>周一至周日为一周期，凡是在【电子游艺厅】周累计有效投注额达到对应等级，次周一即可在活动页面领取对应彩金。</li>
                    <li>该优惠按照达标的等级赠送一次，达标对应等级后次周一便可在优惠页面点击领取，所获彩金仅需【三倍流水】即可取款。</li>
                    <li>请于次周日24点前领取彩金，逾期将无法领取该优惠。</li>
                    <li>对于各种非正常投注行为，如无风险投注、对冲等—经发现将取消优惠资格。</li>
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

const count = ref(0)
const detailClick = () => {
    console.log('testtest', props.msg)
    emit('updateClick', '按鈕被點擊')
}
console.log('ff_promo_04', props.msg)
const rangeDescription = computed(() => {
    if (activityDuration.value == 1) {
        return '长期活动'
    } else if (activityDuration.value == 2) {
        return `${dateFormat(activityStartTime)}至${dateFormat(activityEndTime)}`
    }
})
onMounted(() => {
    console.log('ff_promo_004', props.msg)
    if (props.msg?.btnText) {
        isVisible.value = true
        console.log('vvv', isVisible.value)
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
const activityStartTime = computed(() => {
    return props.msg?.activityStartTime
})
const activityEndTime = computed(() => {
    return props.msg?.activityEndTime
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
