<script>
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
        labels: [ 'January', 'February', 'March', 'January', 'February', 'Jong' ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 60, 70],
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
      rankingItems: [
        { number : 1,
          item : '1번 아이템'
        },
        { number : 2,
          item : '2번 아이템'
        },
        { number : 3,
          item : '3번 아이템'
        },
        { number : 4,
          item : '4번 아이템'
        },
        { number : 5,
          item : '5번 아이템'
        },
        { number : 6,
          item : '6번 아이템'
        },
        { number : 7,
          item : '7번 아이템'
        },
        { number : 8,
          item : '8번 아이템'
        }
      ],
      isActive : false,
      totalLike : 0
    }
  },
  methods: {
    tableShow() {
      this.isActive = !this.isActive
    }
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
            <div class="rankingItem" v-for="rankingItem in rankingItems" :key="rankingItem">
              <div class="itemHead">{{ rankingItem.number }}</div>
              <div class="item">{{ rankingItem.item}}</div>
            </div>
            <div class="allBox" :class="{ active: isActive }">
              <div class="allBoxCheck" :class="{ active: isActive }" @click="tableShow()">
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>
              <div class="allTable" :class="{ active: isActive }">
                <div class="table__name">전체랭킹</div>
                <div class="table__main">
                  <table class="table">
                    <thead class="thead">
                      <tr class="tr">
                        <th>순위</th>
                        <th>번호</th>
                        <th>닉네임</th>
                        <th>조합</th>
                        <th>추천수</th>
                        <th>추천</th>
                      </tr>
                    </thead>
                    <tbody class="tbody">
                      <tr class="tr">
                        <td>1</td>
                        <td>3</td>
                        <td>장준호</td>
                        <td>민트초코 + 감자</td>
                        <td>{{ totalLike }}</td>
                        <td><i class="fa-solid fa-thumbs-up" style="cursor:pointer" @click="totalLike++"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
            display: flex;
            justify-content: center;
            transition: .5s;
            .allBoxCheck {
              cursor: pointer;
              width: 1060px;
              height: 50px;
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
            display: none;
            margin-top: 30px;
            width: 1060px;
            height: 500px;
            margin: auto;
            box-shadow: 0 7px 25px rgba(0,0,0,0.08);
            grid-column: 1 / 5;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            transition: .5s;
            position: relative;
            .allBoxCheck {
              position: absolute;
              bottom: 0;
              cursor: pointer;
              width: 1060px;
              height: 50px;
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
            transition: .5s;
            padding: 20px;
            display: block;
            width: 1060px;
            height: 500px;
            margin: auto;
            .table__name {
              text-align: center;
              font-size: 25px;
              font-weight: 500;
            }
            .table__main {
              margin-top: 30px;
              .table {
                text-align: center;
              }
            }
          }


        }
      }
    }
  }
</style>