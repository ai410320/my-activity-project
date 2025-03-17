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
                <p><span class="text-highlight">活动内容：</span>凡是在<span class="platform-name">五彩堂</span>投注电子单量累计<span class="note-text">100个注单量</span>或以上，次日即可获得最高平均下注金额<span class="note-text">20倍</span>彩金，开启极速游戏模式，轻松赚取免单彩金！</p>
                <div class="table-box m-hide m-landscape-show">
                    <table>
                        <thead>
                            <tr>
                                <th class="t-title"><b>活动要求</b></th>
                                <th class="t-title"><b>注单量</b></th>
                                <th class="t-title"><b>可获彩金</b></th>
                                <th class="t-title"><b>派送时间</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="t-content" rowspan="5">全体新老会员</td>
                                <td class="t-content">100+</td>
                                <td class="t-content">平均下注金额X1倍</td>
                                <td class="t-content" rowspan="5">每天15:00-次日11:59开放领取</td>
                            </tr>
                            <tr>
                                <td class="t-content">500+</td>
                                <td class="t-content">平均下注金额X5倍</td>
                            </tr>
                            <tr>
                                <td class="t-content">1000+</td>
                                <td class="t-content">平均下注金额X8倍</td>
                            </tr>
                            <tr>
                                <td class="t-content">5000+</td>
                                <td class="t-content">平均下注金额X10倍</td>
                            </tr>
                            <tr>
                                <td class="t-content">10000+</td>
                                <td class="t-content">平均下注金额X20倍</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="w-100 table-box grid table m-show m-landscape-hide">
                    <div class="col-1">
                        <div class="t-title table-th"><b>活动要求</b></div>
                    </div>
                    <div class="col-1 table-td">
                        <div class="t-content">全体新老会员</div>
                    </div>
                    <div class="grid">
                        <div class="col-1-2">
                            <div class="t-title table-th"><b>注单量</b></div>
                        </div>
                        <div class="col-1-2">
                            <div class="t-title table-th"><b>可获彩金</b></div>
                        </div>
                        <div class="table-td col-1-2">
                            <div class="t-content">100+</div>
                        </div>
                        <div class="table-td col-1-2">
                            <div class="t-content">平均下注金额X1倍</div>
                        </div>
                        <div class="table-td col-1-2">
                            <div class="t-content">500+</div>
                        </div>
                        <div class="table-td col-1-2">
                            <div class="t-content">平均下注金额X5倍</div>
                        </div>
                        <div class="table-td col-1-2">
                            <div class="t-content">1000+</div>
                        </div>
                        <div class="table-td col-1-2">
                            <div class="t-content">平均下注金额X8倍</div>
                        </div>
                        <div class="table-td col-1-2">
                            <div class="t-content">5000+</div>
                        </div>
                        <div class="table-td col-1-2">
                            <div class="t-content">平均下注金额X10倍</div>
                        </div>
                        <div class="table-td col-1-2">
                            <div class="t-content">10000+</div>
                        </div>
                        <div class="table-td col-1-2">
                            <div class="t-content">平均下注金额X20倍</div>
                        </div>
                    </div>
                    <div class="col-1">
                        <div class="t-title table-th"><b>派送时间</b></div>
                    </div>
                    <div class="col-1 table-td">
                        <div class="t-content">每天15:00-次日11:59开放领取</div>
                    </div>
                </div>
                <p>
                    <span class="note-text">注：</span> 平均下注金额 = 电子总有效投注 / 投注单量
                    <br />
                    <span class="note-text">例：</span> CQ9电子中累计注单量为1000个，平均下注金额100元，次日即可领取100X8=800元。
                </p>

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
                    <li>所获得彩金只需<span class="note-text">2倍流水</span>方可申请提款；</li>
                    <li>此活动仅限投注电子的会员方可参与；</li>
                    <li>每位会员每天仅限领取一次，符合领取条件的会员请在次日24小时内优惠页面点击领取，逾期视为自动放弃优惠；</li>
                    <li>对于各种非正常投注行为，如无风险投注、对冲等一经发现将取消优惠资格。</li>
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
    console.log('ff_promo_18', props.msg)
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
