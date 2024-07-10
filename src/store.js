import { reactive } from "vue";

export const store = reactive({
  cardList: [],
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=100",
  loading: true,
  apiParam: "0",
  apiFilter:
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0&archetype=",
  filterList: [],
});
