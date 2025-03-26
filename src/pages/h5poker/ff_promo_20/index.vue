<template>
    <div id="h5poker-promo-detail" class="corner-radius-20px" style="padding-bottom: 1vw; margin-top: 11.7vw">
        <div class="kv relative">
            <div class="absolute promotion-time-range">
                <img class="time-icon" src="@/public/images/activity_time_log@2x.webp" alt="" />
                <div class="ml-1" id="timeRange" style="color: #cececf">{{ rangeDescription }}</div>
            </div>
        </div>

        <div class="container">
            <div class="content-border">
                <div class="mt-1">
                    <p class="font-size-34px fw-bold text-gold-gradient">
                        <img class="mb-1 mr-1" style="width: 0.8vw" src="@/public/images/bar.png" alt="" />
                        活动内容
                    </p>
                    <p class="text-white font-size-13px mt-3">活动期间，单日存款<span class="text-yellow">100元</span>以上投注任意电子游戏，单日负盈利扣除所有获取优惠金额后亏损金额100以上，次日即可领取电子亏损救援彩金，彩金无上限！</p>
                </div>
                <div class="mt-4">
                    <div class="bg-gradient-bottom-dark-01 mt-1 relative">
                        <table class="text-c font-size-13px" width="100%">
                            <thead>
                                <tr class="height-px-40 text-brown">
                                    <th class="th-border-radius" width="33.3%">亏损金额</th>
                                    <th class="th-border-radius" width="33.3%">可获救援彩金</th>
                                    <th class="th-border-radius" width="33.3%">派发方式</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">100元</td>
                                    <td class="table-bordered">亏损金额的1%</td>
                                    <td class="table-bordered" rowspan="9">
                                        次日 <br /><br />
                                        <span class="text-yellow">08:00 ~ 24:00</span> <br /><br />开放领取
                                    </td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">1000元</td>
                                    <td class="table-bordered">亏损金额的2%</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">10000元</td>
                                    <td class="table-bordered">亏损金额的3%</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">50000元</td>
                                    <td class="table-bordered">亏损金额的4%</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">100000元</td>
                                    <td class="table-bordered">亏损金额的5%</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">200000元</td>
                                    <td class="table-bordered">亏损金额的6%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="mt-4">
                    <div>
                        <p class="text-white font-size-13px mt-1">
                            <span class="text-yellow">优惠金定义：</span>平台返水、优惠彩金。<br />
                            <span class="text-danger">例</span>：当日总存款1000元；总优惠10元；总领取返水10元；当日在电子游戏中负利1000元<br />
                            救援金 =（1000 输值-10 优惠红利 - 10 返水红利）x 会员对应比例
                        </p>
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
                <div>
                    <p class="font-size-34px fw-bold mt-1" style="background: linear-gradient(130.13deg, #dfc191 6.56%, #fff3ce 44.78%, #bb9169 96.4%); -webkit-background-clip: text; color: transparent">
                        <img class="mb-1 mr-1" style="width: 0.8vw" src="@/public/images/bar.png" alt="" />
                        活动规则
                    </p>
                    <ul class="font-size-13px text-white mt-2">
                        <li style="list-style: disc !important">所获得彩金只需<span class="text-yellow">3倍</span>流水方可申请提款。</li>
                        <li style="list-style: disc !important">符合领取条件的会员请在次日24小时内进行领取，逾期将无法领取该优惠；</li>
                        <li style="list-style: disc !important">对于各种非正常投注行为，如无风险投注、对冲等—经发现将取消优惠资格；</li>
                        <li style="list-style: disc !important">此活动只适用于拥有一个账户的会员；每一位用户、每一个电话号码、相同支付方式及IP地址仅限享受一次</li>
                        <li style="list-style: disc !important">为避免文字差异，平台保留对本活动的最終解释权，并且有权更改．延迟或取消活动。</li>
                    </ul>
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
        /* margin-right: 4vw;
        margin-left: 4vw; */
        margin-top: 4vw;
        /* width: 92vw; */
        height: 34.666667vw;
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
    }
}
</style>
