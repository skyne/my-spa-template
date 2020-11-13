<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">
              Devices list
            </h3>
          </div>
          <!-- /.card-header -->
          <div class="box-body">
            <table
              id="example2"
              class="table table-bordered table-hover"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>IP Address</th>
                  <th>...</th>
                  <th>...</th>
                  <th class="action-column">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="device in devices"
                  :key="device.ip"
                >
                  <td>{{ device.name }}</td>
                  <td>{{ device.ip }}</td>
                  <td>Win 95+</td>
                  <td> 4</td>
                  <td class="action-column">
                    <button
                      v-if="!device.registered"
                      class="btn btn-block btn-primary"
                      type="button"
                      @click="() => registerDevice(device.ip)"
                    >
                      Register
                    </button>
                    <span v-else>Already registered</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
export default {
  name: 'DevicesView',
  props: {
    showLoader: Function,
    devices: Array,
    registerDevice: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.action-column {
  max-width: 50px;
}

</style>
