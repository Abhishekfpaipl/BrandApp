<template>
    <div>
        <nav>
            <div class="nav d-flex justify-content-between nav-tabs py-2" style="font-size: 13px; font-weight: 500;"
                id="nav-tab" role="tablist">
                <router-link class="nav-link " :class="active === 'New' ? 'active' : ''" to="/PoNew">New </router-link>
                <router-link class="nav-link " :class="active === 'Ready' ? 'active' : ''" to="/PoReady">Ready</router-link>
                <router-link class="nav-link " :class="active === 'Order' ? 'active' : ''" to="/PoOrder">Order</router-link>
                <router-link class="nav-link " :class="active === 'FabricManage' ? 'active' : ''"
                    to="/FabricManage">Manage</router-link>
                <router-link class="nav-link " :class="active === 'FabricNotes' ? 'active' : ''"
                    to="/FabricNotes">Notes</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'StockLinks',
    props: ['active'],
}
</script>

<style lang="scss" scoped></style>