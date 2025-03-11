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
                <div class="flex-center"><img class="img-title" src="../../public/images/promo_title1.svg" /></div>
                <p>
                    活动内容：单日存款<span class="note-text">100元</span>以上投注任意棋牌游戏，单日负盈利扣除所有获取优惠金额后亏损金额100以上，次日即可领取棋牌亏损救援彩金，彩金无上限！
                </p>
                <div class="table-box">
                    <table>
                        <thead>
                            <tr>
                                <th class="t-title"><b>亏损金额</b></th>
                                <th class="t-title"><b>可获救援彩金</b></th>
                                <th class="t-title"><b>彩金上限</b></th>
                                <th class="t-title"><b>派送方式</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="t-content">1</td>
                                <td class="t-content">3000</td>
                                <td class="t-content">8</td>
                            </tr>
                            <tr>
                                <td class="t-content">2</td>
                                <td class="t-content">5000</td>
                                <td class="t-content">18</td>
                            </tr>
                            <tr>
                                <td class="t-content">3</td>
                                <td class="t-content">10000</td>
                                <td class="t-content">38</td>
                            </tr>
                            <tr>
                                <td class="t-content">4</td>
                                <td class="t-content">30000</td>
                                <td class="t-content">108</td>
                            </tr>
                            <tr>
                                <td class="t-content">5</td>
                                <td class="t-content">50000</td>
                                <td class="t-content">188</td>
                            </tr>
                            <tr>
                                <td class="t-content">6</td>
                                <td class="t-content">100000</td>
                                <td class="t-content">288</td>
                            </tr>
                            <tr>
                                <td class="t-content">7</td>
                                <td class="t-content">300000</td>
                                <td class="t-content">388</td>
                            </tr>
                            <tr>
                                <td class="t-content">8</td>
                                <td class="t-content">500000</td>
                                <td class="t-content">888</td>
                            </tr>
                            <tr>
                                <td class="t-content">9</td>
                                <td class="t-content">1000000</td>
                                <td class="t-content">1388</td>
                            </tr>
                            <tr>
                                <td class="t-content">10</td>
                                <td class="t-content">3000000</td>
                                <td class="t-content">3888</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    优惠金定义：全平台的返水、优惠彩金</br>            
                    <span class="note-text">例：</span> 当日总存款100元；总优惠10元；总领取返水10元；当日在棋牌游戏中负利100元。</br>救援金 =（100输值-10优惠红利 - 10返水红利）x 会员对应比例</br></br>
                    参加方式：登录账号 》优惠 》活动页面领取
                </p>

                <!-- CTA -->
                <div class="flex-center">
                    <a v-if="isVisible" @click="sendEvent()" id="actionBtn" class="main-button btn-round flex-center" :class="buttonClass">{{ buttonText }}</a>
                </div>
                <!-- CTA end -->
            </div>
            <div class="promo-content">
                <div class="flex-center"><img class="img-title" src="../../public/images/promo_title2.svg" /></div>

                <ol class="rules">
                    <li>所获得彩金只需<span class="note-text">1倍流水</span>即可取款。</li>
                    <li>符合领取条件的会员请在次日24小时内进行领取，逾期将无法领取该优惠。</li>
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
import '../../style.css'
const props = defineProps({
    msg: Object,
})
const emit = defineEmits(['updateClick'])

const sendEvent = () => {
    console.log('testtest', props.msg)
    emit('updateClick', '按鈕被點擊')
}

onMounted(() => {
    console.log('ff_promo_11', props.msg)
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
