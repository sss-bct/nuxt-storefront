const getCardNumberMask = (tokenizedData): string => tokenizedData?.numberPart || ""
const getId = (tokenizedData) => tokenizedData?.id || ""

const getPaymentType = (selectedType: string) => {
  let paymentType
  switch (selectedType.toLowerCase()) {
    case "creditcard":
      paymentType = "CreditCard"
      break

    case "checkbymail":
      paymentType = "Check"
      break

    default:
      break
  }
  return paymentType
}

const getExpireMonth = (cardDetails): number => parseInt(cardDetails?.expiryDate.split("/")[0]) || 0

const getExpireYear = (cardDetails): number => parseInt(cardDetails?.expiryDate.split("/")[1]) || 0

const getNameOnCard = (cardDetails) => cardDetails?.nameOnCard

const getAppliedTotal = (checkout) => checkout?.total

const getCardDetailsWithBilling = (cards, billingAddresses) => {
  return cards?.map((c) => {
    return {
      card: { ...c },
      billingAddress: { ...billingAddresses.find((ba) => ba.id === c.contactId) },
    }
  })
}

const getPaymentMethods = (payments) => {
  if (!payments) return []
  const paymentsMethods = payments
    .filter((p) => p?.billingInfo?.card)
    .map((c) => {
      return {
        cardType: c.paymentOrCardType,
        cardNumber: c.cardNumberPartOrMask,
        expiry: c.expireMonth + " / " + c.expireYear,
        cvv: c.ccLastFour,
      }
    })

  return paymentsMethods
}

const getCardType = (cards) => cards?.paymentOrCardType

export const creditCardPaymentGetters = {
  getCardNumberMask,
  getId,
  getAppliedTotal,
  getPaymentType,
  getExpireMonth,
  getExpireYear,
  getNameOnCard,
  getCardDetailsWithBilling,
  getPaymentMethods,
  getCardType,
}
