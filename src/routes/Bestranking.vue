<script>
import axios from 'axios'
// chart
// polararea 보류
import { Bar, Line, PolarArea  } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PolarAreaController, PointElement, LineController, LineElement } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, PolarAreaController, LinearScale, PointElement, LineController, LineElement )
export default {
  name: 'BarChart',
  components: {
    Bar,
    Line,
    PolarArea
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        labels: ['영씨','김씨','장씨','구씨','호씨'],
        datasets: [{
          label: 'My First Dataset',
          data: [65,85,25,13,46],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
          ],
          borderWidth: 1
        }]
      },
      chartOptions: {
        responsive: true,
      },
      isActive : false,
      totalDatas: [],
      nextData: "",
      count : "",
      bestDatas: [],
      bestData_number : "",
      bestData_title : [],

      fotData : "",
      forIndex : ""
    }
  },
  methods: {
    tableShow() {
      this.isActive = !this.isActive
    },
    nextPage() {
      axios({
        method: "GET",
        url: this.nextData
      }).then((res) => {
        console.log(res)
        this.nextData = res.data.next
        this.totalDatas = this.totalDatas.concat(res.data.results)
      }).catch((error) => {
        console.log(error)
      })
    },
  },
  mounted() {
    axios.get("http://54.180.193.83:8081/best/")
    .then((res) => {
      console.log(res)
      this.totalDatas = res.data.results
      this.nextData = res.data.next
      this.bestDatas = res.data.results.slice(0,8)
      this.Loading = true
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>


<template>
  <div class="bestranking">
    <div class="inner">
    <div class="bestranking__name">꿀조합 랭킹</div>
      <div class="bestranking__main">
        <!-- ranking_graph -->
        <div class="graphBox">
          <div class="box">
            <Line
              :chart-options="chartOptions"
              :chart-data="chartData"
              :chart-id="chartId"
              :dataset-id-key="datasetIdKey"
              :plugins="plugins"
              :css-classes="cssClasses"
              :styles="styles"
              :width="width"
              :height="height"
            />
          </div>
          <div class="box">
            <Bar
              :chart-options="chartOptions"
              :chart-data="chartData"
              :chart-id="chartId"
              :dataset-id-key="datasetIdKey"
              :plugins="plugins"
              :css-classes="cssClasses"
              :styles="styles"
              :width="width"
              :height="height"
            />
          </div>
        </div>
        <!-- ranking_table -->
        <div class="tabelBox">
          <div class="rankingBox">
            <div class="rankingItem" v-for="(bestData,index) in bestDatas" :key="bestData">
              <div class="itemHead">{{ index + 1 }}</div>
              <div class="item">{{ bestData.title }}</div>
              <!-- <div class="item">{{ bestData.nickname }}</div> -->
            </div>
            <div class="allBox" :class="{ active: isActive }">
              <div class="allTable" :class="{ active: isActive }">
                <div class="table__name">전체랭킹</div>
                <div class="table__main">
                  <table class="table">
                    <thead class="thead">
                      <tr class="tr">
                        <th>순위</th>
                        <th>닉네임</th>
                        <th>조합이름</th>
                        <th>생성날짜</th>
                        <th>추천수</th>
                      </tr>
                    </thead>
                    <tbody class="tbody">
                      <tr class="tr" v-for="(totalData,index) in totalDatas" :key="totalData">
                        <td>{{ index + 1 }}</td>
                        <td>{{ totalData.nickname }}</td>
                        <td>{{ totalData.title }}</td>
                        <td>{{ totalData.create_date.slice(0,-22) }}</td>
                        <td>{{ (!totalData.likes_cnt ? 0 : totalData.likes_cnt) }}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="nextPage" :class="{ active: isActive }" @click="nextPage()">더보기</div>
                </div>
              </div>
              <div class="allBoxCheck" :class="{ active: isActive }">
                <span class="material-symbols-outlined arrow" @click="tableShow()">expand_more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .bestranking {
    position: relative;
    top: 125px;
    // height: 500px;
    padding: 0 0 80px 0;
    // min-width: 1900px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    .inner {
      width: 1100px;
      margin: auto;
      position: relative;
    }
    .bestranking__name {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      line-height: 3;
    }
    .bestranking__main {
      .graphBox {
        position: relative;
        right: 21px;
        width: 100%;
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 21px;
        min-height: 200px;
        .box {
          position: relative;
          background: #fff;
          padding: 20px;
          width: 100%;
          box-shadow: 0 7px 25px rgba(0,0,0,0.08);
          border-radius: 20px;
        }
      }
      .tabelBox {
        width: 100%;
        padding: 20px;
        // height: 300px;
        background: #fff;
        box-shadow: 0 7px 25px rgba(0,0,0,0.08);
        border-radius: 20px;
        .rankingBox {
          width: 100%;
          display: grid;
          grid-gap: 15px;
          grid-template-columns: repeat(4, 1fr);
          .rankingItem {
            padding: 20px;
            width:  250px;
            height: 280px;
            box-shadow: 0 7px 25px rgba(0,0,0,0.08);
            border-radius: 20px;
            .itemHead {
              text-align: center;
              font-size: 25px;
              border-bottom: 1px solid #dddddd;
            }
            .item {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 200px;
            }
            &:hover {
              border: 5px solid #dddddd;
            }
          }
          .allBox {
            margin-top: 30px;
            width: 1060px;
            height: 50px;
            margin: auto;
            box-shadow: 0 7px 25px rgba(0,0,0,0.08);
            grid-column: 1 / 5;
            border-radius: 20px;
            // display: flex;
            // justify-content: center;
            transition: .5s;
            .nextPage {
              cursor: pointer;
              text-align: center;
              background: #eeeeee;
              border-radius: 10px;
              padding: 5px;
              font-size: 18px;
            }
            .allBoxCheck {
              cursor: pointer;
              width: 1060px;
              height: 50px;
              padding: 0 0 10px 0;
              margin: auto;
              .arrow {
                display: flex;
                margin-top: 5px;
                justify-content: center;
                font-size: 40px;
                transition: .5s;
              }
            }
          }
          .allBox.active {
            margin-top: 30px;
            width: 1060px;
            height: 100%;
            margin: auto;
            box-shadow: 0 7px 25px rgba(0,0,0,0.08);
            grid-column: 1 / 5;
            border-radius: 20px;
            // display: flex;
            // justify-content: center;
            transition: .5s;
            position: relative;
            .allBoxCheck {
              cursor: pointer;
              width: 1060px;
              height: 100%;
              .arrow {
                transition: .5s;
                transform: rotate(180deg);
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 40px;
              }
            }
          }
          .allTable {
            display: none;
          }
          .allTable.active {
            display: block;
            transition: .5s;
            padding: 20px;
            width: 1060px;
            // height: 500px;
            margin: auto;
            .table__name {
              text-align: center;
              font-size: 25px;
              font-weight: 500;
            }
            .table__main {
              margin-top: 20px;
              .table {
                text-align: center;
                .tr {
                  padding: 10px 0 10px 0;
                }
              }
            }
          }


        }
      }
    }
  }
</style>