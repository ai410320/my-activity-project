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
                <p><span class="text-highlight">活动内容：</span>活动期间, 全体新会员下载<span class="text-gold fw-600">【PG电子APP】</span>登录，注册下载APP满7天加赠<span class="text-warning fw-600">1888元</span>回馈彩金，注册下载满20天加赠<span class="text-warning fw-600">8888元</span>回馈礼金。</p>
                <div class="table-box">
                    <table>
                        <thead>
                            <tr>
                                <th class="t-title text-nowrap" width="37%"><b>存款金额</b></th>
                                <th class="t-title text-nowrap" width="25%"><b>累计存款</b></th>
                                <th class="t-title text-nowrap" width="18%"><b>累计投注</b></th>
                                <th class="t-title text-nowrap" width="20%"><b>赠送金额</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="t-content" rowspan="8">注册下载APP满7天加赠1888元</td>
                                <td class="t-content" rowspan="8">100元+</td>
                                <td class="t-content">≥100</td>
                                <td class="t-content">6</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥3,000</td>
                                <td class="t-content">12</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥10,000</td>
                                <td class="t-content">18</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥50,000</td>
                                <td class="t-content">58</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥200,000</td>
                                <td class="t-content">88</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥500,000</td>
                                <td class="t-content">188</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥1,000,000</td>
                                <td class="t-content">388</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥2,000,000</td>
                                <td class="t-content">1888</td>
                            </tr>
                            <tr>
                                <td class="t-content" rowspan="11">注册下载APP满20天加赠8888元</td>
                                <td class="t-content" rowspan="11">300元+</td>
                                <td class="t-content">≥100</td>
                                <td class="t-content">2</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥5,000</td>
                                <td class="t-content">8</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥10,000</td>
                                <td class="t-content">18</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥50,000</td>
                                <td class="t-content">38</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥100,000</td>
                                <td class="t-content">58</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥500,000</td>
                                <td class="t-content">128</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥1,000,000</td>
                                <td class="t-content">288</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥2,000,000</td>
                                <td class="t-content">388</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥5,000,000</td>
                                <td class="t-content">888</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥10,000,000</td>
                                <td class="t-content">1888</td>
                            </tr>
                            <tr>
                                <td class="t-content">≥30,000,000</td>
                                <td class="t-content">8888</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><span class="text-warning fw-600">例：</span>注册下载APP满7天，期间累计存款100元以上，第8-19天即可到活动页领取相应彩金！注册下载APP满20天，期间累计存款300元以上，第21-30天即可到活动页领取相应彩金！</p>

                <!-- CTA -->
                <div class="flex-center">
                    <a v-if="isVisible" @click="sendEvent()" id="actionBtn" class="main-button btn-round flex-center" :class="buttonClass">
                        <img v-if="isSpin" src="@/public/images/spin_white.webp" alt="" style="width: 18px" />
                        {{ buttonText }}
                    </a>
                </div>
                <!-- CTA end -->
            </div>
            <div class="promo-content">
                <div class="flex-center"><img class="img-title" src="@/public/images/promo_title2.svg" /></div>

                <ol class="rules">
                    <li>符合条件的会员请在<span class="text-warning fw-600">注册30天内</span>到活动页面领取，逾期视为放弃。</li>
                    <li>
                        获得的活动<span class="text-warning fw-600">彩金<span class="washTime">3倍</span>流水</span>，即可直接提款。
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
import '@/style.css'
const props = defineProps({
    msg: Object,
})
const emit = defineEmits(['updateClick'])

const isSpin = ref(false)

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

onMounted(() => {
    console.log('ff_promo_38', props.msg)
    if (props.msg?.btnText) {
        isVisible.value = true
    }
})
const isVisible = ref(false)
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
