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

                <p><span class="text-highlight">活动内容：</span>凡本娱乐城的用户，使用USDT数字币充值的会员，每笔数字币充值即可额外获得<span class="note-text">2%</span>彩金。</p>
            </div>
            <div class="promo-content">
                <div class="flex-center"><img class="img-title" src="./img/promo_title3.svg" /></div>
                <p>泰达币（USDT）是Tether公司推出的基于稳定价值货币美元（USD）的代币Tether USD（下称USDT），1USDT=1美元，用户可以随时使用USDT与USD进行1:1兑换。</p>
                <div class="flex-center" style="flex-wrap: wrap; margin: 1rem -0.5rem 0">
                    <div class="item">
                        <div>
                            <div style="position: relative; z-index: 2">
                                <div class="item-title"><img src="./img/title1.webp" /></div>
                                <div class="item-description" style="color: #68512f">
                                    最稳定保值的<br />
                                    数字币
                                </div>
                            </div>

                            <div style="position: absolute; right: 8px; bottom: 8px"><img src="./img/ic01.webp" style="height: 48px" /></div>
                        </div>
                    </div>

                    <div class="item">
                        <div>
                            <div style="position: relative; z-index: 2">
                                <div class="item-title"><img src="./img/title2.webp" /></div>
                                <div class="item-description" style="color: #68512f">
                                    最稳定保值的<br />
                                    数字币
                                </div>
                            </div>

                            <div style="position: absolute; right: 8px; bottom: 8px"><img src="./img/ic02.webp" style="height: 48px" /></div>
                        </div>
                    </div>

                    <div class="item">
                        <div>
                            <div style="position: relative; z-index: 2">
                                <div class="item-title"><img src="./img/title3.webp" /></div>
                                <div class="item-description" style="color: #68512f">
                                    最稳定保值的<br />
                                    数字币
                                </div>
                            </div>

                            <div style="position: absolute; right: 8px; bottom: 8px"><img src="./img/ic03.webp" style="height: 48px" /></div>
                        </div>
                    </div>

                    <div class="item">
                        <div>
                            <div style="position: relative; z-index: 2">
                                <div class="item-title"><img src="./img/title4.webp" /></div>
                                <div class="item-description" style="color: #68512f">
                                    最稳定保值的<br />
                                    数字币
                                </div>
                            </div>

                            <div style="position: absolute; right: 8px; bottom: 8px"><img src="./img/ic04.webp" style="height: 48px" /></div>
                        </div>
                    </div>
                </div>
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
    console.log('ff_promo_004', props.msg)
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
