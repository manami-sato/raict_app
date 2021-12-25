<template lang="pug">
main.event
	header.event__head
		div.event__head--img
			img(:src="`https://click.ecc.ac.jp/ecc/msatou/raict_app/img/${res.img}`")
		Back
		section.event__info
			h1.event__info--ttl {{res.ttl}}
			section
				h2.event__info--headline 公演概要
				p.event__info--date
					span {{fromYear}}
					span {{fromMonth}}
					span {{fromDay}}
					span {{toYear}}
					span {{toMonth}}
					span {{toDay}}
				div.event__info--time 開演 {{start}} （待機開始 {{preStart}}）
		div.event__ticket 購入する
	//- Lives(:value="$route.params.eventId")
	Navigation(value="Search",ref="nav")
</template>

<script>
import Head from "@/components/Head.vue";
import Navigation from "@/components/Navigation.vue";
import Back from "@/components/Back.vue";
import Lives from "@/components/Lives.vue";
// import common from "@/assets/js/common.js";
export default {
  name: "Event",
  props: {
    eventId: Number,
  },
  components: {
    Head,
    Navigation,
    Back,
    Lives,
  },
  data() {
    return {
      res: [],
      id: 0,
      fromYear: 0,
      fromMonth: 0,
      fromDay: 0,
      toYear: 0,
      toMonth: 0,
      toDay: 0,
      start: "",
      preStart: "",
    };
  },
  mounted() {
    this.id = this.$route.params.eventId - 1;
    fetch("https://click.ecc.ac.jp/ecc/msatou/raict_app/products.php")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.res = json.event[this.id];
        this.fromYear = this.res.date.from.year;
        this.fromMonth = this.res.date.from.month;
        this.fromDay = this.res.date.from.day;
        this.toYear = this.res.date.to.year;
        this.toMonth = this.res.date.to.month;
        this.toDay = this.res.date.to.day;
        this.start = this.res.start;
        this.preStart = this.res.preStart;
      });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.event {
  @include headSet();
  &__info {
    margin: 16px 5%;
    &--ttl {
      font-size: 2.4rem;
    }
    &--headline {
      font-size: 1.8rem;
      margin: 16px 0 8px;
    }
    &--time,
    &--date {
      display: flex;
      align-items: center;
      color: #7b7b7b;
      font-size: 1.3rem;
      &::before {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        margin-right: 4px;
      }
    }
    &--date {
      margin-bottom: 8px;
      &::before {
        background: url("https://click.ecc.ac.jp/ecc/msatou/raict_app/img/event_date.png");
        background-repeat: no-repeat;
        background-size: contain;
      }
      span {
        display: flex;
        &:nth-of-type(1),
        &:nth-of-type(2),
        &:nth-of-type(4),
        &:nth-of-type(5) {
          &::after {
            content: ".";
          }
        }
        &:nth-of-type(3) {
          &::after {
            content: "-";
            margin: 0 4px;
          }
        }
        &:nth-of-type(6) {
          &::after {
            content: "";
          }
        }
      }
    }
    &--time {
      &::before {
        background: url("https://click.ecc.ac.jp/ecc/msatou/raict_app/img/event_time.png");
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
  &__ticket {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 256px;
    height: 48px;
    color: #fff;
    background: $secondaryColor;
    border-radius: 8px;
    font-size: 1.6rem;
    font-weight: bold;
    margin: 32px auto;
  }
}
</style>
