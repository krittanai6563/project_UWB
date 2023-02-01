<template>
        <!--begin::Main-->
        <!--begin::Root-->
        <div class="d-flex flex-column flex-root">
            <!--begin::Page-->
            <div class="page d-flex flex-row flex-column-fluid">
                <!--begin::Wrapper-->
                <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                    <!--begin::Header-->
                     <Header></Header>
                    <!--end::Header-->
                    <!--begin::Main-->
                    <div class="d-flex flex-column flex-column-fluid">
                        <!--begin::toolbar-->
                        <div class="toolbar" id="kt_toolbar">
                            <div class="container d-flex flex-stack flex-wrap flex-sm-nowrap">
                                <!--begin::Info-->
                                <div class="d-flex flex-column align-items-start justify-content-center flex-wrap me-1">
                                    <!--begin::Title-->
                                    <h3 class="text-dark fw-bolder my-1">ระบุตำแหน่ง</h3>
                                    <!--end::Title-->
                                    <!--begin::Breadcrumb-->
                                    <ul class="breadcrumb breadcrumb-line bg-transparent text-muted fw-bold p-0 my-1 fs-7">
                                        <li class="breadcrumb-item">
                                            <a href="index.html" class="text-muted text-hover-primary">หน้าแรก</a>
                                        </li>
                                        <li class="breadcrumb-item text-dark">ระบุตำแหน่ง</li>
                                    </ul>
                                    <!--end::Breadcrumb-->
                                </div>
                                <!--end::Info-->
                                <!--begin::Nav-->
                                <!-- <div class="d-flex align-items-center flex-nowrap text-nowrap overflow-auto py-1">
                                    <a href="general/faq.html" class="btn btn-active-accent fw-bolder">FAQ</a>
                                    <a href="general/pricing.html"
                                        class="btn btn-active-accent active fw-bolder ms-3">Pricing</a>
                                    <a href="general/invoice.html" class="btn btn-active-accent fw-bolder ms-3">Invoice</a>
                                    <a href="#" class="btn btn-active-accent fw-bolder ms-3">Login</a>
                                    <a href="#" class="btn btn-active-accent fw-bolder ms-3">Wizard</a>
                                    <a href="#" class="btn btn-active-accent fw-bolder ms-3">Error</a>
                                </div> -->
                                <!--end::Nav-->
                            </div>
                        </div>
                        <!--end::toolbar-->
                        <!--begin::Content-->
                        <div class="content fs-6 d-flex flex-column-fluid" id="kt_content">
                            <!--begin::Container-->
                            <div class="container">
                                <!--begin::Pricing-->
                                <div class="card">
                                    <div class="card-body p-12">
                                        
                                       
                                  
                                      

                                     
                                        <scatter-chart :data="state.productData" height="600px"></scatter-chart>
<!-- 
    <div class="box">
        
   
        <span class="anchor"></span>
        <span class="anchor1"></span>
        <span class="anchor2"></span>

        <div class="sonar-wrapper">
            <div class="sonar-emitter">
                <div class="sonar-wave"></div>
            </div>
        </div>
        
    </div> -->

       

                                        
                                   
                        
                                        
                                    </div>

                                    
                                </div>
                                <!--end::Pricing-->
                            </div>
                            <!--end::Container-->
                        </div>
                        <!--end::Content-->
                    </div>
                    <!--end::Main-->
                    <!--begin::Footer--> 
                    <Footer></Footer>
                    <!--end::Footer-->
                </div>
                <!--end::Wrapper-->
                <!--begin::Sidebar-->
                <Sidebar></Sidebar>
                <!--end::Sidebar-->
            </div>
            <!--end::Page-->
        </div>
        <!--end::Root-->
        <!--begin::Header Search-->
         <Search></Search>
        <!--end::Header Search-->
        <!--begin::Mega Menu-->
        <Menu></Menu>
        <!--end::Mega Menu-->
       

       

 
</template>

<script>
import Header from '@/components/pages/Header.vue'
import Footer from '@/components/pages/Footer.vue'
import Sidebar from '@/components/pages/Sidebar.vue'
import Search from '@/components/pages/Search.vue'
import Menu from '@/components/pages/Menu.vue'

import { reactive } from '@vue/runtime-core'
import 'chartkick/chart.js'
import { productCollection } from '../utl/firebase'

export default {
    components: { Header, Footer, Sidebar, Search, Menu , },
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Master',

   

    


    setup() {
        const state = reactive({
            productData: {},
        });
        setInterval(async () => {
            let productDataSet = await productCollection.once("value");
            state.productData = productDataSet.val();
        })
        return { state };
    },
    mounted() {
        console.log('Test')
    },






    
    

    

};


</script>

<style>
</style>