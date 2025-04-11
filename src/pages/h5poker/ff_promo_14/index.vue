<template>
    <div id="h5poker-promo-detail" class="corner-radius-20px" style="padding-bottom: 1vw">
        <div class="kv relative">
            <div class="absolute promotion-time-range">
                <img class="time-icon" src="@/public/images/activity_time_log@2x.webp" alt="" />
                <div class="ml-1" id="timeRange" style="color: #cececf">每周一</div>
            </div>
        </div>

        <div class="container">
            <div class="content-border">
                <div class="mt-1">
                    <div class="justify-content-center">
                        <img class="mb-1" style="height: 5.3vw" src="@/public/images/promo_detail.svg" alt="" />
                    </div>
                    <p class="text-white font-size-13px mt-3">上周会员累计<span class="text-yellow">存款达到≥500元，周一当日存款累计≥100元</span>，即可获得平台专宠返利金，充值越高获得彩金最多! <span class="text-yellow">最高588专宠彩金</span>等您来拿，仅需<span class="text-yellow">3倍流水</span>即可出款!</p>
                </div>
                <div class="mt-4">
                    <div class="bg-gradient-bottom-dark-01 mt-1 relative">
                        <table class="text-c font-size-13px" width="100%">
                            <thead>
                                <tr class="height-px-40 text-brown">
                                    <th class="th-border-radius" width="38.5%">上周累计存款金额</th>
                                    <th class="th-border-radius" width="38.5%">当日累计存款金额</th>
                                    <th class="th-border-radius" width="23%">专宠返利金</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥500</td>
                                    <td class="table-bordered">≥100</td>
                                    <td class="table-bordered">18</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥5,000</td>
                                    <td class="table-bordered">≥1,000</td>
                                    <td class="table-bordered">58</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥10,000</td>
                                    <td class="table-bordered">≥3,000</td>
                                    <td class="table-bordered">88</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥20,000</td>
                                    <td class="table-bordered">≥5,000</td>
                                    <td class="table-bordered">188</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥50,000</td>
                                    <td class="table-bordered">≥10,000</td>
                                    <td class="table-bordered">288</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥100,000</td>
                                    <td class="table-bordered">≥20,000</td>
                                    <td class="table-bordered">588</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="mt-4">
                    <div>
                        <p class="text-white font-size-13px"><span class="text-danger">例</span>：会员于开元棋牌游戏中投注50万元，次日即可领取737元棋牌得意金。</p>
                    </div>
                    <div class="mt-2">
                        <span class="text-white font-size-13px">参加方式：登录账号 》活动中心 》活动页面领取</span>
                    </div>
                </div>

                <!-- 按鈕 -->
                <div class="mt-3 justify-content-center">
                    <div id="actionBtn" class="btn btn-fill-primary width-px-245 height-px-35 align-items-center justify-content-center">
                        <div v-if="isSpin" class="spinner" id="spinner">
                            <div v-for="n in 12" :key="n" :style="getStyle(n)"></div>
                        </div>
                        <span @click="sendEvent()" id="btnText" :class="buttonClass">{{ buttonText }}</span>
                    </div>
                </div>
            </div>

            <div class="content-border mt-3">
                <div class="mt-1">
                    <div class="justify-content-center">
                        <img class="mb-1" style="height: 5.3vw" src="@/public/images/promo_rule.svg" alt="" />
                    </div>
                    <ol class="font-size-13px text-white mt-2">
                        <li>所获得彩金只需<span class="text-yellow">【3倍流水】</span>方可申请提款；</li>
                        <li>符合领取条件的会员请在次日24小时内进行领取，逾期将无法领取该优惠;</li>
                        <li>对于各种非正常投注行为，如无风险投注、对冲等—经发现将取消优惠资格；</li>
                        <li>同一IP和设备、同一手机号、姓名、银行卡号等信息的游戏账号，仅可参与一次，若有违规者，将不可享受此红利；</li>
                        <li>任何用户或团体以不正常的方式进行套取活动优惠，平台方保留在不通知的情况下冻结或关闭相关账号的权利，并不退还款项，且用户会被列入黑名单。若发现有套利客户，对冲或不诚实获取盈利的行为，将取消其优惠资格；</li>
                        <li>为避免文字差异，平台保留对本活动的最終解释权，并且有权更改．延迟或取消活动。</li>
                    </ol>
                </div>
            </div>

            <div id="crmFloat" class="crm-float">
                <img src="@/public/images/crm_float.webp" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import '@/style/h5poker/style.css'
const props = defineProps({
    msg: Object,
})
const emit = defineEmits(['updateClick'])

const sendEvent = () => {
    console.log('testtest', props.msg)
    emit('updateClick', '按鈕被點擊')
    buttonText.value = '加载中...'
    isSpin.value = true
    setTimeout(() => {
        buttonText.value = props.msg?.btnText
        isSpin.value = false
    }, 1000)
}

const isSpin = ref(false)

const getStyle = (index) => ({
    transform: `translate(-50%, -50%) rotate(${(index - 1) * 30}deg) translateY(-7px)`,
    animationDelay: `${(index - 1) * 0.1}s`,
})
const buttonText = ref(props.msg?.btnText)
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
<style scoped>
#h5poker-promo-detail {
    .kv {
        background-repeat: no-repeat !important;
        background-position: center top !important;
        background-image: url(./img/head1.webp) !important;
        background-size: 100% 34.6667vw !important;
        height: 34.666667vw;
        z-index: -1;
    }
    .kv::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20%; /* 可調整漸層高度 */
        background: linear-gradient(to bottom, rgba(17, 30, 131, 0) 3.48%, #101a32 96.51%);
        pointer-events: none;
        z-index: -1;
    }
}
</style>
