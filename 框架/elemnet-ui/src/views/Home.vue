<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <span>选课系统</span>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <!-- 第一种欢迎{{ $route.params.query }} -->
                        <!-- 欢迎{{ $route.query.user }} -->
                        <!-- 欢迎{{ $route.params.query }} -->
                        <!-- 欢迎{{ $route.hash.slice(1) }} -->
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <el-dropdown-item>个人详情</el-dropdown-item>
                            <el-dropdown-item></el-dropdown-item>
                            <el-dropdown-item disabled>Action 4</el-dropdown-item>
                            <el-dropdown-item divided>Action 5</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

            </el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.common-layout {
    height: 100vh;
}

.el-container {
    height: 100%;
}

.el-header {
    display: flex;
    height: 100px;
    line-height: 100px;
    background-color: rgb(12, 188, 138);
    font-size: 40px;
    justify-content: space-between;

    .el-dropdown-link {
        cursor: pointer;
        color: var(--el-color-primary);
        display: flex;
        align-items: center;
    }
}</style>