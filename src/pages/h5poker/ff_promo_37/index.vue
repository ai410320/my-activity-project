<template>
    <div id="h5poker-promo-detail" class="corner-radius-20px" style="padding-bottom: 1vw">
        <div class="kv relative">
            <div class="absolute promotion-time-range">
                <img class="time-icon" src="@/public/images/activity_time_log@2x.webp" alt="" />
                <div class="ml-1" id="timeRange" style="color: #cececf">{{ rangeDescription }}</div>
            </div>
        </div>

        <div class="container">
            <div class="content-border">
                <div class="mt-1">
                    <div class="justify-content-center">
                        <img class="mb-1" style="height: 5.3vw" src="@/public/images/promo_detail.svg" alt="" />
                    </div>
                    <p class="text-white font-size-13px mt-3">活动期间, 全体新会员<span class="text-yellow">【下载APP】</span>登录，第二次单笔存款<span class="text-yellow">1000元以上</span>，即可获得最高<span class="text-yellow">8888元</span>存款回馈金，您还在等什么？快来告诉您的亲朋好友一起参与吧！</p>
                </div>
                <div class="mt-4">
                    <div class="bg-gradient-bottom-dark-01 mt-1 relative">
                        <table class="text-c font-size-13px" width="100%">
                            <thead>
                                <tr class="height-px-40 text-brown">
                                    <th class="th-border-radius" width="33.3%">活动条件</th>
                                    <th class="th-border-radius" width="33.3%">存款金额</th>
                                    <th class="th-border-radius" width="33.3%">赠送彩金</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered" rowspan="6">三存</td>
                                    <td class="table-bordered">≥1,000</td>
                                    <td class="table-bordered">38</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥5,000</td>
                                    <td class="table-bordered">88</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥10,000</td>
                                    <td class="table-bordered">188</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥30,000</td>
                                    <td class="table-bordered">388</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥50,000</td>
                                    <td class="table-bordered">688</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥100,000</td>
                                    <td class="table-bordered">1888</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥300,000</td>
                                    <td class="table-bordered">8888</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="mt-4">
                    <div>
                        <p class="text-white font-size-13px"><span class="text-danger">例：</span>新会员在第三笔存款10000元后，即可点击优惠页面申请三存彩金188元，流水188*3倍=564元即可提现</p>
                    </div>
                </div>

                <!-- 按鈕 -->
                <div class="mt-3 justify-content-center">
                    <div id="actionBtn" class="btn btn-fill-primary width-px-245 height-px-35 align-items-center justify-content-center" :class="buttonClass">
                        <div v-if="isSpin" class="spinner" id="spinner">
                            <div v-for="n in 12" :key="n" :style="getStyle(n)"></div>
                        </div>
                        <span @click="sendEvent()" id="btnText" >{{ buttonText }}</span>
                    </div>
                </div>
            </div>

            <div class="content-border mt-3">
                <div class="mt-1">
                    <div class="justify-content-center">
                        <img class="mb-1" style="height: 5.3vw" src="@/public/images/promo_rule.svg" alt="" />
                    </div>
                    <ol class="font-size-13px text-white mt-2">
                        <li>活动开始后，您注册后将自动参加。您需要第三次充值并达到充值金额要求。</li>
                        <li>仅一次机会，充值越多，奖励越多，最高可获得奖励8888.00元。</li>
                        <li>奖金仅支持用户3次<span class="text-yellow">存款次日前</span>手动点击领取，奖金将自动发放到钱包，逾期视为放弃。</li>
                        <li>
                            本次活动的所有奖金，需要彩金<span class="text-yellow"><span class="washTime">3倍</span>流水</span>才能提现。
                        </li>
                        <li>此活动只适用于拥有一个账户的会员；每一位用户、每一个电话号码、相同支付方式及IP地址仅限享受一次。</li>
                        <li>为避免对文字理解产生分歧，平台保留本次活动的最终解释权。</li>
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
    if (btnStatus.value === 3 || btnStatus.value === 2) return 'btn-opacity'
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
