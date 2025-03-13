<template>
    <div id="h5poker-promo-detail" class="corner-radius-20px" style="padding-bottom: 1vw; margin-top: 3vw">
        <div class="kv corner-radius-12px relative">
            <div class="absolute promotion-time-range px-3">
                <img class="time-icon" src="@/public/images/activity_time_log@2x.webp" alt="" />
                <div class="ml-1" id="timeRange" style="color: #999999">{{ rangeDescription }}</div>
            </div>
        </div>

        <div class="container">
            <div class="content-border">
                <div class="mt-1">
                    <p class="font-size-34px fw-bold text-gold-gradient">
                        <img class="mb-1 mr-1" style="width: 0.8vw" src="@/public/images/bar.png" alt="" />
                        活动内容
                    </p>
                    <p class="text-white font-size-13px mt-3">活动期间，会员在【电子游艺厅】<span class="text-danger">周累计投注</span>额达到相应等级，即可获得相应彩金。</p>
                </div>
                <div class="mt-4">
                    <div class="bg-gradient-bottom-dark-01 mt-1 relative">
                        <table class="text-c font-size-13px" width="100%">
                            <thead>
                                <tr class="height-px-40 text-brown">
                                    <th class="th-border-radius" width="15%">阶梯</th>
                                    <th class="th-border-radius" width="42.5%">周有效投注额</th>
                                    <th class="th-border-radius" width="42.5%">奖励金额</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">1</td>
                                    <td class="table-bordered">3000</td>
                                    <td class="table-bordered">8</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">2</td>
                                    <td class="table-bordered">5000</td>
                                    <td class="table-bordered">18</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">3</td>
                                    <td class="table-bordered">10000</td>
                                    <td class="table-bordered">38</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">4</td>
                                    <td class="table-bordered">30000</td>
                                    <td class="table-bordered">108</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">5</td>
                                    <td class="table-bordered">50000</td>
                                    <td class="table-bordered">188</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">6</td>
                                    <td class="table-bordered">100000</td>
                                    <td class="table-bordered">288</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">7</td>
                                    <td class="table-bordered">300000</td>
                                    <td class="table-bordered">388</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">8</td>
                                    <td class="table-bordered">500000</td>
                                    <td class="table-bordered">888</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">9</td>
                                    <td class="table-bordered">1000000</td>
                                    <td class="table-bordered">1388</td>
                                </tr>
                                <tr class="table-bordered text-white">
                                    <td class="table-bordered">10</td>
                                    <td class="table-bordered">3000000</td>
                                    <td class="table-bordered">3888</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 按鈕 -->
                <div class="mt-3 justify-content-center">
                    <div id="actionBtn" class="btn btn-fill-primary width-px-245 height-px-35 align-items-center justify-content-center">
                        <div v-if="isSpin" class="spinner" id="spinner"></div>
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
                        <li style="list-style: disc !important">周一至周日为一周期，凡是在【电子游艺厅】周累计有效投注额达到对应等级，次周一即可在活动页面领取对应彩金。</li>
                        <li style="list-style: disc !important">该优惠按照达标的等级赠送一次，达标对应等级后次周一便可在优惠页面点击领取，所获彩金仅需<span class="text-danger">【五倍流水】</span>即可取款。</li>
                        <li style="list-style: disc !important">请于次周日24点前领取彩金，迫期将无法领取该优惠。</li>
                        <li style="list-style: disc !important">对于各种非正常投注行为，如无风险投注、对冲等一经发现将取消优惠资格。</li>
                        <li style="list-style: disc !important">此活动只适用于拥有一个账户的会员；每一位用户、每一个住址、每一个电话号码、相同支付方式及IP地址仅限享受一次。</li>
                        <li style="list-style: disc !important">为避免文字差异，平台保留对本活动的最終解释权，并旦有权更改．延迟或取消活动。</li>
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
import '@/style.css'
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
    }, 2000)
}

const isSpin = ref(false)

onMounted(() => {
    console.log('ff_promo_04', props.msg)
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
