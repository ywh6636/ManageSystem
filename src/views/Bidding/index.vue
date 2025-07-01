<template>
  <div class="bidding-view">
    <div class="header">
      <p>Bidding</p>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column
          v-for="(coulmn, index) in tableColumns"
          :key="index"
          :prop="coulmn.prop"
          :label="coulmn.label"
          :type="coulmn.type"
          :sortable="coulmn.sortable"
          :width="coulmn.width"
        >
          <template #header>
            <el-popover class="box-item" placement="bottom" width="auto">
              <template #reference>{{ coulmn.label }}</template>
              <template #default>
                <div class="filter-content">
                  <el-input v-model="filter_date" />
                </div>
                <div class="filter-btn">
                  <el-button type="primary" size="small" @click="onSearch">confirm</el-button>
                </div>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="Action">
          <template #default>
            <el-button size="mini">Edit</el-button>
            <el-button size="mini" type="danger">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import type { TableColumn } from './type'

defineOptions({ name: 'BiddingView' })

const filter_date = ref('')

const tableColumns = computed<TableColumn[]>(() => {
  return [
    {
      prop: 'date',
      label: 'Date',
      type: '',
      sortable: true,
      width: 300,
    },
    {
      prop: 'name',
      label: 'Name',
      type: '',
      sortable: true,
      width: 300,
    },
    {
      prop: 'address',
      label: 'Address',
      type: '',
      sortable: true,
      width: 500,
    },
  ]
})

// 响应式数据
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

// methods
const onSearch = () => {
  console.log(filter_date.value)
}
</script>

<style scoped lang="scss">
.bidding-view {
  width: 100%;
  .table {
    margin: 12px;
  }
}
.el-popover {
  .filter-content {
    margin-bottom: 12px !important;
  }
  .filter-btn {
    text-align: right;
  }
}
</style>
