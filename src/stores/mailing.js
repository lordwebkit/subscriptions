import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMailingStore = defineStore('mailing', () => {
  const mailing = ref([])
  const popupIsOpen = ref(false)
  const selectedMailing = computed(() => {
    return mailing.value.filter((item) => item.selected).map((item) => item.id)
  })
  const email = ref()

  const selectedAllMailing = computed(() => {
    let selected = true

    mailing.value.forEach((item) => {
      if (item.selected === false) selected = false
    })

    return selected
  })

  const toggleAllMailing = (isSelected) => {
    mailing.value = mailing.value.map((item) => {
      return { ...item, selected: isSelected }
    })
  }

  const selectAllMailing = () => {
    toggleAllMailing(true)
  }

  const unselectAllMailing = () => {
    toggleAllMailing(false)
  }

  async function getMailing() {
    try {
      const response = [
        {
          id: '0',
          img: 'src/assets/image/mailing/1.png',
          time: 'Перед рассветом',
          title: 'Утренний бухгалтер',
          description: 'Самые важные новости и события за день. Кратко, по делу, структурировано.',
          advantage: ['Новости для бухгалтеров, ИП и директора', 'Подборка статей за день'],
          subscription: '59 342'
        },
        {
          id: '1',
          img: 'src/assets/image/mailing/2.png',
          time: 'После заката',
          title: 'Ночной бухгалтер',
          description:
            'Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.',
          advantage: ['Анализ, оценка и только самое главное', 'Лучшие комменты юзеров в обзоре'],
          subscription: '37 480'
        },
        {
          id: '2',
          img: 'src/assets/image/mailing/3.png',
          time: 'Раз в две недели',
          title: 'Ножницы скидок',
          description: 'Подборка самых выгодных и полезных спецпредложений от надежных компаний.',
          advantage: [
            'Акции и скидки от лидеров рынка',
            'Те, кто подписался – экономят много денег '
          ],
          subscription: '92 118'
        },
        {
          id: '3',
          img: 'src/assets/image/mailing/4.png',
          time: 'По мере появления анонсов',
          title: 'Чемодан вебинаров',
          description:
            'Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.',
          advantage: ['Никогда не пришлем платные вебинары', 'Подборка топовых тем для вебинаров'],
          subscription: '92 082'
        }
      ]

      setTimeout(() => {
        mailing.value = response.map((item) => {
          return { ...item, selected: false }
        })
      }, 300)
    } catch (e) {
      console.error(e)
    }
  }

  async function sendEmail() {
    try {
      console.log('Sended data ...', {
        email: email.value,
        selectRubric: JSON.stringify(selectedMailing.value)
      })

      email.value = ''
      unselectAllMailing()
      popupIsOpen.value = true
    } catch (e) {
      console.error(e)
    }
  }

  return {
    email,
    mailing,
    popupIsOpen,
    selectedMailing,
    getMailing,
    selectedAllMailing,
    selectAllMailing,
    unselectAllMailing,
    sendEmail
  }
})
