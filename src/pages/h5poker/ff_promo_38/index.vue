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
                    <img class="mb-1" src="@/public/images/promo_detail.svg" alt="" />
                    <p class="text-white font-size-13px mt-3">活动期间, 全体新会员<span class="text-yellow">【下载APP】</span>登录，注册新会员后，完成<span class="text-yellow">电子游戏</span>有效投注，可获得新人优享<span class="text-yellow">1888元</span>。</p>
                </div>
                <div class="mt-4">
                    <div class="bg-gradient-bottom-dark-01 mt-1 relative">
                        <table class="text-c font-size-13px" width="100%">
                            <thead>
                                <tr class="height-px-40 text-brown">
                                    <th class="th-border-radius" width="25%">存款金额</th>
                                    <th class="th-border-radius" width="25%">有效投注</th>
                                    <th class="th-border-radius" width="25%">赠送彩金</th>
                                    <th class="th-border-radius" width="25%">
                                        <b>累计可获<br />得奖金</b>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-bordered text-white">
                                    <td class="t-content" rowspan="7">10元+</td>
                                    <td class="table-bordered">≥100</td>
                                    <td class="table-bordered">2</td>
                                    <td class="table-bordered">2</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥1,000</td>
                                    <td class="table-bordered">8</td>
                                    <td class="table-bordered">10</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥10,000</td>
                                    <td class="table-bordered">18</td>
                                    <td class="table-bordered">28</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥50,000</td>
                                    <td class="table-bordered">88</td>
                                    <td class="table-bordered">116</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥200,000</td>
                                    <td class="table-bordered">188</td>
                                    <td class="table-bordered">304</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥500,000</td>
                                    <td class="table-bordered">388</td>
                                    <td class="table-bordered">692</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">≥1,000,000</td>
                                    <td class="table-bordered">1196</td>
                                    <td class="table-bordered">1888</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="mt-4">
                    <div>
                        <p class="text-white font-size-13px"><span class="text-danger">例：</span>会员存款10元，有效投注达到5万+，即可申请2+8+18+88=116元奖金。以此类推！</p>
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
                    <img class="mb-1" src="@/public/images/promo_rule.svg" alt="" />
                    <ol class="font-size-13px text-white mt-2">
                        <li>符合条件的会员请在<span class="text-yellow">注册7天内</span>到活动页面领取，逾期视为放弃。</li>
                        <li>
                            获得的活动彩金<span class="text-yellow"><span class="washTime">1倍</span>流水</span>，即可直接提款。
                        </li>
                        <li>所有因任何因素被取消之注单，或因中奖后彩金加码游戏所产生之单号，均不在计算范围之内。</li>
                        <li>会员参与活动均由系统自动统计，若有任何异议，以平台查询结果为准；</li>
                        <li>为避免文字理解差异，我司保留此活动的最终解释权，以及在无通知的情况下修改，终止活动的权利。</li>
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
