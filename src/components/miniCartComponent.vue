<template>
    <div class="customPosition col-md-12 col-sm-12 bg-primary">
        <div class="row">
            <div class="col-md-6">vacio</div>
            <div class="col-md-6">Minicart</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'miniCartComponent'

}
</script>

<style>

    .customPosition{
        position:fixed;
        float: right;
        z-index: 10;
    }

</style>