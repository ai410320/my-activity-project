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
                <div class="flex-center"><img class="img-title" src="@/public/images/promo_title1.svg" /></div>
                <p><span class="text-highlight">活动内容：</span>为答谢新老用户，特设定周一专场活动，活动期间，上周会员累计<span class="note-text">存款达到≥500元</span>，<span class="note-text">周一当日存款累计≥100元</span>，即可获得平台专宠返利金，充值越高获得彩金最多! <span class="note-text">最高588专宠彩金</span>等您来拿，仅需<span class="note-text">1倍流水</span>即可出款!</p>
                <div class="table-box">
                    <table>
                        <thead>
                            <tr>
                                <th class="t-title" width="33.33%"><b>上周累计存款金额</b></th>
                                <th class="t-title" width="33.33%"><b>当日累计存款金额</b></th>
                                <th class="t-title" width="33.33%"><b>专宠返利金</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="t-content">≥500</td>
                                <td class="t-content">≥100</td>
                                <td class="t-content">18</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥5,000</td>
                                <td class="t-content">≥1,000</td>
                                <td class="t-content">58</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥10,000</td>
                                <td class="t-content">≥3,000</td>
                                <td class="t-content">88</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥20,000</td>
                                <td class="t-content">≥5,000</td>
                                <td class="t-content">188</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥50,000</td>
                                <td class="t-content">≥10,000</td>
                                <td class="t-content">288</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥100,000</td>
                                <td class="t-content">≥20,000</td>
                                <td class="t-content">588</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>例如：会员上周累计存款5,000元，当天该会员存款累计为1,000元，则可获得58元专宠彩金</p>
                <!-- CTA -->
                <div class="flex-center">
                    <a v-if="isVisible" @click="sendEvent()" id="actionBtn" class="main-button btn-round flex-center" :class="buttonClass">{{ buttonText }}</a>
                </div>
                <!-- CTA end -->
            </div>
            <div class="promo-content">
                <div class="flex-center"><img class="img-title" src="@/public/images/promo_title2.svg" /></div>

                <ol class="rules">
                    <li>所获得奖金需<span class="note-text">1倍流水</span>即可取款；</li>
                    <li>满足条件的会员需在<span class="note-text">次日24小时</span>内领取，逾期将无法领取优惠；</li>
                    <li>对于各种非正常投注行为，如无风险投注、对冲等一经发现将取消优惠资格；</li>
                    <li>同一IP和设备、同一手机号、姓名、银行卡号等信息的游戏账号，仅可参与一次，若有违规者，将不可享受此红利；</li>
                    <li>任何用户或团体以不正常的方式进行套取活动优惠，平台方保留在不通知的情况下冻结或关闭相关账号的权利，并不退还款项，且用户会被列入黑名单。若发现有套利客户，对冲或不诚实获取盈利的行为，将取消其优惠资格；</li>
                    <li>为避免文字理解差异，本平台保留本活动最终解释权。</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import '@/style.css'
const props = defineProps({
    msg: Object,
})
const emit = defineEmits(['updateClick'])

const sendEvent = () => {
    console.log('testtest', props.msg)
    emit('updateClick', '按鈕被點擊')
}

onMounted(() => {
    console.log('ff_promo_32', props.msg)
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
