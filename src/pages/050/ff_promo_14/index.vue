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
                <p>活动内容：<span class="platform-name">希尔顿</span>将不定期派发神秘彩金给予所有的玩家，彩金没有门槛限制、不设上限金额，只要您在<span class="platform-name">希尔顿</span>有注册过账号，只要您曾经登录过<span class="platform-name">希尔顿</span>，就算您不曾在我公司存款游戏过，都有可能收到我们为您随机派发的惊喜彩金！</p>
                <div class="table-box">
                    <table>
                        <thead>
                            <tr>
                                <th class="t-title"><b>神秘彩金 随机派送</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="t-content">神秘彩金无需发送申请,直接划入会员帐号或绑定之银行帐号</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- CTA -->
                <!-- CTA end -->
            </div>
            <div class="promo-content">
                <div class="flex-center"><img class="img-title" src="@/public/images/promo_title2.svg" /></div>

                <ol class="rules">
                    <li>凡是获得神秘奖金的会员，我们将在彩金存入会员账号或绑定之银行账号后，通过账号绑定的电话进行通知，彩金发放纯属随机，还望会员能多多关注支持<span class="platform-name">希尔顿</span>，祝您成为下一个幸运儿！</li>
                    <li>存入账号内的神秘彩金需一倍流水即可提款</li>
                    <li>对于各种非正常投注行为，如无风险投汪、对冲等—经发现将取消优惠资格。</li>
                    <li>此活动只适用于拥有一个账户的会员；每一位用户，每一个住址、每一个电话号码、相同支付方式及IP地址仅限享受一次。</li>
                    <li>为避免文字差异，平台保留对本活动的最終解释权，并且有权更改．延迟或取消活动。</li>
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
    console.log('ff_promo_14', props.msg)
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
