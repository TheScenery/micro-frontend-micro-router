<template>
    <div class="common-layout">
        <el-container>
            <el-header class="header">
                <el-tag size="large"><router-link to="/home">Home</router-link></el-tag>
                <el-tag size="large"><router-link to="/about">About</router-link></el-tag>
            </el-header>
            <el-main class="main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'BaseLayout',
}
</script>
<style scoped>
.header {
    display: flex;
}
.el-tag {
    font-size: 24px;
    margin-right: 16px;
}
</style>