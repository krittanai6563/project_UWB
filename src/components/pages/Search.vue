<template>
    <div class="modal bg-white fade" id="kt_header_search_modal" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content shadow-none">
                <div class="container w-lg-800px">
                    <div class="modal-header d-flex justify-content-end border-0">
                        <!--begin::Close-->
                        <div class="btn btn-icon btn-sm btn-light-primary ms-2" data-bs-dismiss="modal">
                            <!--begin::Svg Icon | path: icons/duotone/Navigation/Close.svg-->
                            <span class="svg-icon svg-icon-1">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)"
                                        fill="#000000">
                                        <rect fill="#000000" x="0" y="7" width="16" height="2" rx="1" />
                                        <rect fill="#000000" opacity="0.5"
                                            transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)"
                                            x="0" y="7" width="16" height="2" rx="1" />
                                    </g>
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </div>
                        <!--end::Close-->
                    </div>
                    <div class="modal-body">
                        <!--begin::Search-->
                        <form class="pb-10">
                            <input autofocus="" type="text"
                                class="form-control bg-transparent border-0 fs-4x text-center fw-normal" name="query"
                                placeholder="Search..." />
                        </form>
                        <!--end::Search-->
                        <!--begin::Shop Goods-->
                        
                        <!--end::Shop Goods-->
                        <!--begin::Framework Users-->
                        
                        <!--end::Framework Users-->
                        <!--begin::Tutorials-->
                        
                        <!--end::Tutorials-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Search',
};

</script>

<style>

</style>