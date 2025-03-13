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
                <p><span class="text-highlight">活动内容：</span>活动期间, 全体新会员下载<span class="text-gold fw-600">【PG电子APP】</span>登录，注册新会员后，完成<span class="text-warning fw-600">电子游戏</span>有效投注，可获得新人优享<span class="text-warning fw-600">1888元</span>。</p>
                <div class="table-box">
                    <table>
                        <thead>
                            <tr>
                                <th class="t-title"><b>存款金额</b></th>
                                <th class="t-title"><b>有效投注</b></th>
                                <th class="t-title"><b>赠送彩金</b></th>
                                <th class="t-title">
                                    <b>累计<br />可获得奖金</b>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="t-content" rowspan="7">10元+</td>
                                <td class="t-content">≥100</td>
                                <td class="t-content">2</td>
                                <td class="t-content">2</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥1,000</td>
                                <td class="t-content">8</td>
                                <td class="t-content">10</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥10,000</td>
                                <td class="t-content">18</td>
                                <td class="t-content">28</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥50,000</td>
                                <td class="t-content">88</td>
                                <td class="t-content">116</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥200,000</td>
                                <td class="t-content">188</td>
                                <td class="t-content">304</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥500,000</td>
                                <td class="t-content">388</td>
                                <td class="t-content">692</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥1,000,000</td>
                                <td class="t-content">1196</td>
                                <td class="t-content">1888</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><span class="text-warning fw-600">例：</span>会员存款10元，有效投注达到5万+，即可申请2+8+18+88=116元奖金。以此类推！</p>
                <!-- CTA -->
                <div class="flex-center">
                    <a v-if="isVisible" @click="sendEvent()" id="actionBtn" class="main-button btn-round flex-center" :class="buttonClass">{{ buttonText }}</a>
                </div>
                <!-- CTA end -->
            </div>
            <div class="promo-content">
                <div class="flex-center"><img class="img-title" src="../../public/images/promo_title2.svg" /></div>

                <ol class="rules">
                    <li>符合条件的会员请在<span class="text-warning fw-600">注册7天内</span>到活动页面领取，逾期视为放弃。</li>
                    <li>
                        获得的活动<span class="text-warning fw-600">彩金<span class="washTime">1倍</span>流水</span>，即可直接提款。
                    </li>
                    <li>所有因任何因素被取消之注单，或因中奖后彩金加码游戏所产生之单号，均不在计算范围之内。</li>
                    <li>会员参与活动均由系统自动统计，若有任何异议，以平台查询结果为准；</li>
                    <li>为避免文字理解差异，我司保留此活动的最终解释权，以及在无通知的情况下修改，终止活动的权利。</li>
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
    console.log('ff_promo_37', props.msg)
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
