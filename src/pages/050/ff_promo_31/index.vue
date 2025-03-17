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
                <p>
                    即日起本公司注册会员帐号后成功充值，有效投注1元就能享受<span class="note-text">1.0%</span>的返水且无上限<br />
                    当天（00:00:00-23:59:59）的有效投注额，会在第二天上午7点前自动洗码，自动添加到帐。
                </p>
                <div class="table-box">
                    <table>
                        <thead>
                            <tr>
                                <th class="t-title" rowspan="2">
                                    <b>每日有效投注<br />（流水）</b>
                                </th>
                                <th class="t-title" colspan="5"><b>洗码优惠比例</b></th>
                            </tr>
                            <tr>
                                <th class="t-title"><b>真人</b></th>
                                <th class="t-title"><b>电子</b></th>
                                <th class="t-title"><b>体育</b></th>
                                <th class="t-title"><b>捕鱼&棋牌</b></th>
                                <th class="t-title"><b>彩票</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="t-content">1元+</td>
                                <td class="t-content">0.3%</td>
                                <td class="t-content">1.0%</td>
                                <td class="t-content">0.4%</td>
                                <td class="t-content">0.6%</td>
                                <td class="t-content">0%</td>
                            </tr>
                            <tr>
                                <td class="t-content">100万元+</td>
                                <td class="t-content">0.4%</td>
                                <td class="t-content">1.2%</td>
                                <td class="t-content">0.5%</td>
                                <td class="t-content">0.7%</td>
                                <td class="t-content">0%</td>
                            </tr>
                            <tr>
                                <td class="t-content">500万元+</td>
                                <td class="t-content">0.5%</td>
                                <td class="t-content">1.4%</td>
                                <td class="t-content">0.6%</td>
                                <td class="t-content">0.8%</td>
                                <td class="t-content">0%</td>
                            </tr>
                            <tr>
                                <td class="t-content">1000万元+</td>
                                <td class="t-content">0.6%</td>
                                <td class="t-content">1.6%</td>
                                <td class="t-content">0.7%</td>
                                <td class="t-content">1.0%</td>
                                <td class="t-content">0%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="promo-content">
                <div class="flex-center"><img class="img-title" src="@/public/images/promo_title2.svg" /></div>

                <ol class="rules">
                    <li>本娱乐城提供业界最高返水优惠活动，如发现会员进行非法炒水或是利用非法软件等形式进行投注或伙同代理套利，将永远冻结账号以及没收所有结余。</li>
                    <li>会员同一住址、同一账号、同一姓名、同一提款账号、同一电话或同一IP等相同者，我们将视为同一人，若本娱乐城在发现会员有重复申请账号进行套取彩金之行为时，保留取消、收回会员所有优惠彩金及没收该会员账号内余额的权利，每位玩家、每一住址、每一电子邮箱、每一电话号码、相同支付卡/信用卡号、同一IP、以及共享电脑环境（例如网吧或其它公用电脑等）</li>
                    <li>无论是个人或是团体，如有任何威胁，滥用本娱乐城赠送彩金优惠的行为，经财务审查及活动策划组发现，本娱乐城保留权利取消/收回优惠以及优惠产生之盈利。</li>
                    <li>投注在体育，对冲或对打投注不计，未接受注单/赛果为平的注单不计，在真人/电子无风险投注不计。无风险投注包括在百家乐同时投注庄家、闲家、轮盘同时投注黑色、单、双、大、小、任何取消注单赛事或局数不计。</li>
                    <li>所有本娱乐城的优惠是特别为玩家而设，在玩家注册资讯有争议时，为确保双方利益，杜绝身份盗用行为，本平台保留权利要求客户提供充足有效证件，并与各种方式辨别客户是否符合资格享有本娱乐城的任何优惠。</li>
                    <li>为防止红利猎人套利，任何造成活动终止或者影响其他会员权利，无论会员层级，若经查询后有任何滥用及红利之行为，本公司保留权利取消所有优惠，该注单以及注单所产生的红利，并停用会员之权利，本娱乐城不承担对此做出任何说明及解释之责任。</li>
                    <li>本娱乐城保留所有权利在任何时候都可以更改、停止、取消优惠活动。</li>
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
    console.log('ff_promo_31', props.msg)
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
