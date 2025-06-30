<template>
  <div class="bidding-view">
    <div class="header">
      <p>Bidding</p>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column sortable prop="date">
          <template #header>
            <el-popover
              class="box-item"
              title="Title"
              content="Bottom Center prompts info"
              placement="bottom"
            >
              <template #reference>Date</template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column sortable prop="name" label="Name" />
        <el-table-column sortable prop="address" label="Address" />
        <el-table-column sortable prop="address" label="Address" />
        <el-table-column sortable prop="address" label="Address" />
        <el-table-column sortable prop="address" label="Address" />
        <el-table-column sortable prop="address" label="Address" />
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
defineOptions({ name: 'BiddingView' })
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

const str =
  'Added Interim containment action as Site-Replace & created the task "Pending assign design team"(yi.zhong)'
const res = str.indexOf('Site-Replace')
console.log(str.substring(0, res))
</script>

<style scoped lang="scss">
.bidding-view {
  width: 100%;
  .table {
    margin: 12px;
  }
}
</style>
