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
                    <p class="text-white font-size-13px mt-3">即日起会员于棋牌游戏当日有效投注2137元+，次日即可获得棋牌得意金，祝您“棋”开得胜，最高可获<span class="text-yellow">7137元彩金！</span></p>
                </div>
                <div class="mt-4">
                    <div class="bg-gradient-bottom-dark-01 mt-1 relative">
                        <table class="text-c font-size-13px" width="100%">
                            <thead>
                                <tr class="height-px-40 text-brown">
                                    <th class="th-border-radius" width="33.3%">单日有效投注</th>
                                    <th class="th-border-radius" width="33.3%">棋牌得意金</th>
                                    <th class="th-border-radius" width="33.3%">派发方式</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">2,137+</td>
                                    <td class="table-bordered">5</td>
                                    <td class="pd-1 table-bordered" rowspan="7">
                                        次日 <br /><br />
                                        <span class="text-yellow">08:00 ~ 24:00</span> <br />
                                        <br />开放领取
                                    </td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">1万+</td>
                                    <td class="table-bordered">17</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">5万+</td>
                                    <td class="table-bordered">57</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">10万+</td>
                                    <td class="table-bordered">137</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">50万+</td>
                                    <td class="table-bordered">737</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">200万+</td>
                                    <td class="table-bordered">2,137</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">500万+</td>
                                    <td class="table-bordered">7,137</td>
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
                <div>
                    <p class="font-size-34px fw-bold mt-1" style="background: linear-gradient(130.13deg, #dfc191 6.56%, #fff3ce 44.78%, #bb9169 96.4%); -webkit-background-clip: text; color: transparent">
                        <img class="mb-1 mr-1" style="width: 0.8vw" src="@/public/images/bar.png" alt="" />
                        活动规则
                    </p>
                    <ul class="font-size-13px text-white mt-2">
                        <li style="list-style: disc !important">所获得彩金只需<span class="text-yellow">3倍流水</span>方可申请提款；</li>
                        <li style="list-style: disc !important">符合领取条件的会员请在次日24小时内进行领取，逾期将无法领取该优惠；</li>
                        <li style="list-style: disc !important">对于各种非正常投注行为，如无风险投注、对冲等—经发现将取消优惠资格；</li>
                        <li style="list-style: disc !important">此活动只适用于拥有一个账户的会员；每一位用户，每一个住址、每一个电话号码、相同支付方式及IP地址仅限享受一次;</li>
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
        margin-right: 4vw;
        margin-left: 4vw;
        margin-top: 4vw;
        /* width: 92vw; */
        height: 34.666667vw;
    }
}
</style>
