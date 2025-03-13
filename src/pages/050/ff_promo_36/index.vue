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
                <p><span class="text-highlight">活动内容：</span>活动期间, 全体新会员下载<span class="text-gold fw-600">【PG电子APP】</span>登录，第三次单笔存款<span class="text-warning fw-600">1000元以上</span>，即可获得最高<span class="text-warning fw-600">8888元</span>存款回馈金，您还在等什么？快来告诉您的亲朋好友一起参与吧！</p>
                <div class="table-box">
                    <table>
                        <thead>
                            <tr>
                                <th class="t-title"><b>活动对象</b></th>
                                <th class="t-title"><b>存款金额</b></th>
                                <th class="t-title"><b>赠送彩金</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="t-content" rowspan="7">三存</td>
                                <td class="t-content">≥1,000</td>
                                <td class="t-content">38</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥5,000</td>
                                <td class="t-content">88</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥10,000</td>
                                <td class="t-content">188</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥30,000</td>
                                <td class="t-content">388</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥50,000</td>
                                <td class="t-content">688</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥100,000</td>
                                <td class="t-content">1888</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥300,000</td>
                                <td class="t-content">8888</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><span class="text-warning fw-600">例：</span>新会员在第三笔存款10000元后，即可点击优惠页面申请三存彩金188元，流水188*<span class="washTime">3倍</span>=<span id="washTimeResult">564</span>元即可提现</p>
                <!-- CTA -->
                <div class="flex-center">
                    <a v-if="isVisible" @click="sendEvent()" id="actionBtn" class="main-button btn-round flex-center" :class="buttonClass">{{ buttonText }}</a>
                </div>
                <!-- CTA end -->
            </div>
            <div class="promo-content">
                <div class="flex-center"><img class="img-title" src="@/public/images/promo_title2.svg" /></div>

                <ol class="rules">
                    <li>活动开始后，您注册后将自动参加。您需要第三次充值并达到充值金额要求。</li>
                    <li>仅一次机会，充值越多，奖励越多，最高可获得奖励8888.00元。</li>
                    <li>奖金仅支持用户3次<span class="text-warning fw-600">存款次日前</span>手动点击领取，奖金将自动发放到钱包，逾期视为放弃。</li>
                    <li>
                        本次活动的所有奖金，需要<span class="text-warning fw-600">彩金<span class="washTime">3倍</span>流水</span>才能提现。
                    </li>
                    <li>此活动只适用于拥有一个账户的会员；每一位用户、每一个电话号码、相同支付方式及IP地址仅限享受一次。</li>
                    <li>为避免对文字理解产生分歧，平台保留本次活动的最终解释权。</li>
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
    console.log('ff_promo_36', props.msg)
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
