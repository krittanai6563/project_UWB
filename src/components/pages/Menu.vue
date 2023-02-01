<template>
<div class="modal bg-white fade" id="kt_mega_menu_modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content shadow-none">
            <div class="container">
                <div class="modal-header d-flex flex-stack border-0">
                    <div class="d-flex align-items-center">
                        <!--begin::Logo-->
                        <a href="index.html">
                            <img alt="Logo" src="frontend/media/logos/logo-default.svg" class="h-30px" />
                        </a>
                        <!--end::Logo-->
                    </div>
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
                    <!--begin::Row-->
                    <div class="row py-10 g-5">
                        <!--begin::Column-->
                        <div class="col-lg-6 pe-lg-25">
                            <!--begin::Row-->
                            <div class="row">
                                <div class="col-sm-4">
                                    <h3 class="fw-bolder mb-5">Dashboards</h3>
                                    <ul
                                        class="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="index.html">Start</a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="#" data-kt-page="pro">Extended
                                                <span
                                                    class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">Pro</span></a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="dashboards/light.html">Light</a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="#" data-kt-page="pro">Compact
                                                <span
                                                    class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">Pro</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-sm-4">
                                    <h3 class="fw-bolder mb-5">Apps</h3>
                                    <ul
                                        class="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="#" data-kt-page="pro">Private Chat
                                                <span
                                                    class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">Pro</span></a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="#" data-kt-page="pro">Group Chat
                                                <span
                                                    class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">Pro</span></a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="#" data-kt-page="pro">Drawer Chat
                                                <span
                                                    class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">Pro</span></a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="#" data-kt-page="pro">Inbox
                                                <span
                                                    class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">Pro</span></a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="#" data-kt-page="pro">Shop 1
                                                <span
                                                    class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">Pro</span></a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="#" data-kt-page="pro">Shop 2
                                                <span
                                                    class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">Pro</span></a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="#" data-kt-page="pro">Shop Product
                                                <span
                                                    class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">Pro</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-sm-4">
                                    <h3 class="fw-bolder mb-5">General</h3>
                                    <ul
                                        class="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="general/faq.html">FAQ</a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2 active"
                                                href="general/pricing.html">Pricing</a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="general/invoice.html">Invoice</a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="#" data-kt-page="pro">Login
                                                <span
                                                    class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">Pro</span></a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="#" data-kt-page="pro">Wizard
                                                <span
                                                    class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">Pro</span></a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="#" data-kt-page="pro">Error
                                                <span
                                                    class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">Pro</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!--end::Row-->
                            <!--begin::Row-->
                            <div class="row">
                                <div class="col-sm-4">
                                    <h3 class="fw-bolder mb-5">Profile</h3>
                                    <ul
                                        class="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="profile/overview.html">Overview</a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="#" data-kt-page="pro">Account
                                                <span
                                                    class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">Pro</span></a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="#" data-kt-page="pro">Settings
                                                <span
                                                    class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">Pro</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-sm-4">
                                    <h3 class="fw-bolder mb-5">Resources</h3>
                                    <ul
                                        class="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2"
                                                href="documentation/base/utilities.html">Components</a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2"
                                                href="documentation/getting-started.html">Documentation</a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2" href="#" data-kt-page="pro">Layout
                                                Builder
                                                <span
                                                    class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">Pro</span></a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link ps-0 py-2"
                                                href="documentation/getting-started/changelog.html">Changelog
                                                <span
                                                    class="badge badge-changelog badge-light-danger bg-hover-danger text-hover-white fw-bold fs-9 px-2 ms-2">v1.0.1</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!--end::Row-->
                        </div>
                        <!--end::Column-->
                        <!--begin::Column-->
                        <div class="col-lg-6">
                            <h3 class="fw-bolder mb-8">Quick Links</h3>
                            <!--begin::Row-->
                            <div class="row g-5">
                                <div class="col-sm-4">
                                    <a href="#" class="card bg-light-success hoverable min-h-125px shadow-none mb-5">
                                        <div class="card-body d-flex flex-column flex-center">
                                            <h3 class="fs-3 mb-2 text-dark fw-bolder">Security</h3>
                                            <p class="mb-0 text-gray-600">$2.99/month</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-4">
                                    <a href="#" class="card bg-light-danger hoverable min-h-125px shadow-none mb-5">
                                        <div class="card-body d-flex flex-column flex-center text-center">
                                            <h3 class="fs-3 mb-2 text-dark fw-bolder">Demo</h3>
                                            <p class="mb-0 text-gray-600">Free Version</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-sm-4">
                                    <a href="#" class="card bg-light-warning hoverable min-h-125px shadow-none mb-5">
                                        <div class="card-body d-flex flex-column flex-center text-center">
                                            <h3 class="fs-3 mb-2 text-dark text-hover-primary fw-bolder">Try Now
                                            </h3>
                                            <p class="mb-0 text-gray-600">Pro Version</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <!--end::Row-->
                            <!--begin::Row-->
                            <div class="row g-5">
                                <div class="col-sm-8">
                                    <a href="#" class="card bg-light-primary hoverable min-h-125px shadow-none mb-5">
                                        <div class="card-body d-flex flex-column flex-center text-center">
                                            <h3 class="fs-3 mb-2 text-dark fw-bolder">Payment Methods</h3>
                                            <p class="mb-0 text-gray-600">Credit Cards/Debit Cards, Paypal,
                                                <br />Transferwise &amp; Others
                                            </p>
                                        </div>
                                    </a>
                                    <!--begin::Row-->
                                    <div class="row g-5">
                                        <div class="col-sm-6">
                                            <a class="card bg-light-warning hoverable shadow-none min-h-125px mb-5">
                                                <div class="card-body d-flex flex-column flex-center text-center">
                                                    <h3 class="fs-3 mb-2 text-dark fw-bolder">Support</h3>
                                                    <p class="mb-0 text-gray-600">6 Month Free</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-sm-6">
                                            <a href="#"
                                                class="card bg-light-success hoverable shadow-none min-h-125px mb-5">
                                                <div class="card-body d-flex flex-column flex-center text-center">
                                                    <h3 class="fs-3 mb-2 text-dark fw-bolder">Installation</h3>
                                                    <p class="mb-0 text-gray-600">$0.99 Per Machine</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <!--end::Row-->
                                </div>
                                <div class="col-sm-4">
                                    <a href="#"
                                        class="card card-stretch mb-5 bg-light-info hoverable shadow-none min-h-250px">
                                        <div class="card-body d-flex flex-column p-0">
                                            <div class="d-flex flex-column flex-center text-center px-5 pt-10">
                                                <h3 class="fs-3 mb-2 text-dark fw-bolder">Quick Start</h3>
                                                <p class="mb-0 text-gray-600">Single Click Import</p>
                                            </div>
                                            <div class="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom"
                                                style="background-image:url('./frontend/media/illustrations/terms-1.png')">
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <!--end::Row-->
                        </div>
                        <!--end::Column-->
                    </div>
                    <!--end::Row-->
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Menu',
};

</script>

<style>

</style>