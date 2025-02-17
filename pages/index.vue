<template>
  <div>
    <SfHero class="hero" :slider-options="{ autoplay: false }">
      <SfHeroItem
        v-for="(img, index) in heroes"
        :key="index"
        :image="img.image"
        :title="img.title"
        :subtitle="img.subtitle"
        :button-text="img.buttonText"
        :background="img.background"
        :class="img.className"
      >
        <template #subtitle="{ subtitle }">
          <div :class="{ 'display-none': !subtitle }" class="sf-hero-item__subtitle">
            {{ subtitle }}
          </div>
        </template>
        <template #title="{ title }">
          <div :class="{ 'display-none': !title }" class="sf-hero-item__title">{{ title }}</div>
          <div :class="{ 'display-none': !img.description }" class="sf-hero-item__description">
            {{ img.description }}
          </div>
        </template>
        <template #call-to-action="{ buttonText, link }">
          <div v-if="buttonText" class="sf-hero-item__button">
            <SfButton :link="link" data-testid="hero-cta-button">
              {{ buttonText }}
            </SfButton>
          </div>
        </template>
      </SfHeroItem>
    </SfHero>
  </div>
</template>

<script>
import { SfHero, SfButton } from "@storefront-ui/vue"
import CarouselImage1 from "@/assets/images/Mobile-Homepage-HeroBanner.png"

export default {
  components: { SfHero, SfButton },
  layout: "full-width",
  setup() {
    const pageName = "home-page"
    const heroes = [
      {
        title: "Save upto 50%",
        subtitle: "Check Off Your List Event",
        description: "Shop early to get your holiday gifts on time.",
        buttonText: "Shop Holiday Items on Sale",
        background: "rgb(236, 239, 241)",
        image: CarouselImage1,
      },
      {
        title: "Save upto 70%",
        subtitle: "Check Off Your List Event",
        description: "Shop early to get your holiday gifts on time.",
        buttonText: "Shop Holiday Items on Sale",
        background: "rgb(236, 239, 241)",
        image: "https://i.pinimg.com/474x/ac/0f/38/ac0f388b725f5c24d4f0b63c547be9f5.jpg",
      },
      {
        title: "Save upto 30%",
        subtitle: "Check Off Your List Event",
        description: "Shop early to get your holiday gifts on time.",
        buttonText: "Shop Holiday Items on Sale",
        background: "rgb(236, 239, 241)",
        image: "https://i.pinimg.com/736x/04/96/05/04960532dffffe5e551b3fab6015a874.jpg",
      },
    ]
    return {
      pageName,
      heroes,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/components/organisms/SfHero.scss";

::v-deep .sf-hero {
  &__slides {
    height: calc(85vh - 3.438rem);
  }

  &-item {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @include for-desktop {
      align-items: center;
    }

    &__wrapper {
      display: flex;
      align-items: center;
      background-color: var(--c-white);
      margin: 2rem 1.5rem;
      height: auto;
      min-height: auto;
      padding: var(--spacer-lg);
      text-align: center;
    }

    &__subtitle {
      --hero-item-subtitle-font-size: 2rem;
      --hero-item-subtitle-font-weight: 500;

      width: 100%;
      color: var(--c-black);
      text-transform: capitalize;
    }

    &__title {
      --hero-item-title-font-size: 2.25rem;
      --hero-item-title-font-weight: 700;

      width: 100%;
      color: var(--c-black);
      text-transform: capitalize;
    }

    &__description {
      color: var(--c-black);
      margin-top: 0.5rem;
    }

    &__button {
      display: flex;
      background-color: var(--_c-green-primary);
      margin-top: 1rem;
    }
  }
}
</style>
