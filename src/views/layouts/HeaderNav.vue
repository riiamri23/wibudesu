<template>
  <nav class="px-2 sm:px-4 py-2.5">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <router-link :to="`/`" class="w-1/6 items-center text-xl text-[#00b1f4]">
        WibuDesu
      </router-link>
      <div class="hidden w-full md:w-auto md:flex md:justify-between md:grow">
        <div class="my-auto">
          <ul
            class="
              flex flex-col
              mt-4
              md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium
            "
          >
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-gray-700
                  rounded
                  md:bg-transparen md:p-0
                  dark:text-white
                "
                active-class="text-blue-700 !important"
                aria-current="page"
              >
                Home
                <!--- border bottom --->
                <div class="m-auto w-1/3 bg-[#5b43e4] h-1 rounded-sm"></div>
              </a>
            </li>
            <li>
              <a
                :to="`/`"
                class="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-gray-700
                  rounded
                  md:bg-transparen md:p-0
                  dark:text-white
                "
                active-class="text-blue-700 !important"
                aria-current="page"
              >
                Anime
                <!--- border bottom --->
                <div class="m-auto w-1/3 bg-[#5b43e4] h-1 rounded-sm"></div>
              </a>
            </li>
            <li>
              <router-link
                :to="`/manga`"
                class="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-gray-700
                  rounded
                  md:bg-transparen md:p-0
                  dark:text-white
                "
                active-class="text-blue-700 !important"
                aria-current="page"
              >
                Manga
                <!--- border bottom --->
                <div class="m-auto w-1/3 bg-[#5b43e4] h-1 rounded-sm"></div>
              </router-link>
            </li>
            <li>
              <router-link
                :to="`/news`"
                class="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-gray-700
                  border-b border-gray-100
                  hover:bg-gray-50
                  md:hover:bg-transparent
                  md:border-0
                  md:hover:text-blue-700
                  md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
              >
                Anime News
              </router-link>
            </li>
            <li>
              <a
                href="#"
                class="
                  block
                  py-2
                  pr-4
                  pl-3
                  text-gray-700
                  border-b border-gray-100
                  hover:bg-gray-50
                  md:hover:bg-transparent
                  md:border-0
                  md:hover:text-blue-700
                  md:p-0
                  dark:text-gray-400
                  md:dark:hover:text-white
                  dark:hover:bg-gray-700 dark:hover:text-white
                  md:dark:hover:bg-transparent
                  dark:border-gray-700
                "
                >Help</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="flex justify-between">
        <span class="p-2 bg-white m-2 rounded-2xl">
          <svg
            height="25"
            width="25"
            class="fill-black w-full"
            aria-labelledby="title desc"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.9 19.7"
          >
            <title id="title">Search Icon</title>
            <desc id="desc">A magnifying glass icon.</desc>
            <g class="search-path" fill="none" stroke="#000000">
              <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
              <circle cx="8" cy="8" r="7" />
            </g>
          </svg>
        </span>
        <span class="p-2 bg-white m-2 rounded-2xl">
          <svg
            height="25"
            width="25"
            class="fill-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120.12 120.2"
          >
            <title>bell</title>
            <path
              d="M112.33,88.4c-.65,16.1-30.57,17.07-30.24,17.4-3.26,5.52-8.78,11.38-19.84,11.38s-18.08-5.86-21.34-11.38c.33-.33-29.59-1.3-30.24-17.4C10.67,77.5,19.13,72.63,23,71s5.2-23.41,5.2-23.41S30.69,18.64,52.39,16c0,0-2.5-12.68,9.11-13,11.61.33,9.11,13,9.11,13,21.7,2.6,24.16,31.55,24.16,31.55S96.07,69.37,100,71,112.33,77.5,112.33,88.4Z"
              style="fill: none; stroke-width: 5; stroke: #000000"
            />
          </svg>
        </span>
        <span class="p-2 bg-white m-2 rounded-2xl">
          <svg
            width="25"
            height="25"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            viewBox="0 0 256 256"
            xml:space="preserve"
          >
            <desc>Created with Fabric.js 1.7.22</desc>
            <defs></defs>
            <g transform="translate(128 128) scale(0.72 0.72)" style="">
              <g
                style="
                  stroke: none;
                  stroke-width: 0;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: none;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
              >
                <path
                  d="M 75.546 78.738 H 14.455 C 6.484 78.738 0 72.254 0 64.283 V 25.716 c 0 -7.97 6.485 -14.455 14.455 -14.455 h 61.091 c 7.97 0 14.454 6.485 14.454 14.455 v 38.567 C 90 72.254 83.516 78.738 75.546 78.738 z M 14.455 15.488 c -5.64 0 -10.228 4.588 -10.228 10.228 v 38.567 c 0 5.64 4.588 10.229 10.228 10.229 h 61.091 c 5.64 0 10.228 -4.589 10.228 -10.229 V 25.716 c 0 -5.64 -4.588 -10.228 -10.228 -10.228 H 14.455 z"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: rgb(29, 29, 27);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
                <path
                  d="M 11.044 25.917 C 21.848 36.445 32.652 46.972 43.456 57.5 c 2.014 1.962 5.105 -1.122 3.088 -3.088 C 35.74 43.885 24.936 33.357 14.132 22.83 C 12.118 20.867 9.027 23.952 11.044 25.917 L 11.044 25.917 z"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: rgb(29, 29, 27);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
                <path
                  d="M 46.544 57.5 c 10.804 -10.527 21.608 -21.055 32.412 -31.582 c 2.016 -1.965 -1.073 -5.051 -3.088 -3.088 C 65.064 33.357 54.26 43.885 43.456 54.412 C 41.44 56.377 44.529 59.463 46.544 57.5 L 46.544 57.5 z"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: rgb(29, 29, 27);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
                <path
                  d="M 78.837 64.952 c -7.189 -6.818 -14.379 -13.635 -21.568 -20.453 c -2.039 -1.933 -5.132 1.149 -3.088 3.088 c 7.189 6.818 14.379 13.635 21.568 20.453 C 77.788 69.973 80.881 66.89 78.837 64.952 L 78.837 64.952 z"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: rgb(29, 29, 27);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
                <path
                  d="M 14.446 68.039 c 7.189 -6.818 14.379 -13.635 21.568 -20.453 c 2.043 -1.938 -1.048 -5.022 -3.088 -3.088 c -7.189 6.818 -14.379 13.635 -21.568 20.453 C 9.315 66.889 12.406 69.974 14.446 68.039 L 14.446 68.039 z"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: rgb(29, 29, 27);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
              </g>
            </g>
          </svg>
        </span>

        <span class="p-2 bg-white m-2 rounded-2xl flex w-1/2">
          <div
            class="w-5 rounded-full mr-1"
            style="
              background-image: url('https://otakudesu.live/wp-content/uploads/2022/01/118840.jpg');
              background-repeat: no-repeat;
              background-size: cover;
            "
          ></div>
          <p class="m-auto mr-3">Rii Amri</p>
          <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
          <svg
            class="m-auto"
            width="10"
            height="10"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 330 330"
            style="enable-background: new 0 0 330 330"
            xml:space="preserve"
          >
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
              c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
              s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            />
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      //   data: {}
    };
  },
  // props: ['anime'],
  created: function () {
    // console.log(this.anime);
  },
};
</script>