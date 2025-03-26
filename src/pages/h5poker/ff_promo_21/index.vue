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
                    <p class="text-white font-size-13px mt-3">会员于本平台电子游艺中，只要单个注单派彩金额超过500元，即可获得加赠彩金最高<span class="text-yellow">17777元</span>！</p>
                </div>
                <div class="mt-4">
                    <div class="bg-gradient-bottom-dark-01 mt-1 relative">
                        <table class="text-c font-size-13px" width="100%">
                            <thead>
                                <tr class="height-px-40 text-brown">
                                    <th class="th-border-radius" width="15%">阶梯</th>
                                    <th class="th-border-radius" width="42.5%">单注派彩金额</th>
                                    <th class="th-border-radius" width="42.5%">加赠彩金</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">1</td>
                                    <td class="table-bordered">500+</td>
                                    <td class="table-bordered">27元</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">2</td>
                                    <td class="table-bordered">1000+</td>
                                    <td class="table-bordered">57元</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">3</td>
                                    <td class="table-bordered">2000+</td>
                                    <td class="table-bordered">87元</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">4</td>
                                    <td class="table-bordered">5000+</td>
                                    <td class="table-bordered">157元</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">5</td>
                                    <td class="table-bordered">10000+</td>
                                    <td class="table-bordered">307元</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">6</td>
                                    <td class="table-bordered">30000+</td>
                                    <td class="table-bordered">907元</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">7</td>
                                    <td class="table-bordered">100000+</td>
                                    <td class="table-bordered">2777元</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">8</td>
                                    <td class="table-bordered">200000+</td>
                                    <td class="table-bordered">3999元</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">9</td>
                                    <td class="table-bordered">500000+</td>
                                    <td class="table-bordered">7777元</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">10</td>
                                    <td class="table-bordered">1000000+</td>
                                    <td class="table-bordered">17777元</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="mt-4">
                    <div>
                        <p class="text-white font-size-13px"><span class="text-danger">例</span>：会员在“糖果派对-极速版”游戏中下注50元，派彩10000元，即可申请307元加赠彩金！</p>
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
                        <li style="list-style: disc !important">所获得彩金只需<span class="text-yellow">1倍</span>流水方可申请提款；</li>
                        <li style="list-style: disc !important">每天可申请1次，每个注单仅限申请1次，天数按照美东时问进行计算。</li>
                        <li style="list-style: disc !important">所中奖的注单需在24点前进行申请，逾期视为自动放弃优惠。</li>
                        <li style="list-style: disc !important">电子游艺中赠送给您的免费抽奖机会所产生的注单，并不作为参与本次活动的有效注单，以及任何原因投注额小于1元，均不具备参与本次活动</li>
                        <li style="list-style: disc !important">对于各种非正常投注行为，如无风险投注、对冲等一经发现将取消优惠资格。</li>
                        <li style="list-style: disc !important">此活动只适用于拥有一个账户的会员；每一位用户，每一个住址、每一个电话号码、相同支付方式及IP地址仅限享受一次。</li>
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
