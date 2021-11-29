<template>
  <div
      class="uitk-layout-grid uitk-layout-grid-gap-three uitk-layout-grid-columns-small-2 uitk-layout-grid-columns-large-12 all-t-margin-three">
    <div
        class="uitk-layout-grid-item uitk-layout-grid-item-columnspan-small-2 uitk-layout-grid-item-columnspan-large-5">
      <div
          class="uitk-layout-grid uitk-layout-grid-gap-three uitk-layout-grid-columns-small-1 uitk-layout-grid-columns-medium-2 Location ">
        <div
            class="uitk-layout-grid-item uitk-layout-grid-item-columnspan-small-1 uitk-layout-grid-item-columnspan-medium-2">
          <div data-testid="location-field-destination-container">
            <div class="uitk-typeahead" data-stid="location-field-destination">
              <div class="uitk-menu-typeahead-wrapper" title="目的地">
                <div id="location-field-destination-menu" class="uitk-typeahead-menu uitk-menu uitk-menu-mounted">
                  <div class="uitk-field has-floatedLabel-label has-icon has-no-placeholder">
                    <label class="uitk-field-label is-visually-hidden"
                           for="location-field-destination-input">目的地</label>
                    <input id="location-field-destination-input" aria-expanded="false" aria-invalid="false"
                           aria-required="false" class="uitk-field-input uitk-menu-trigger is-hidden"
                           data-stid="location-field-destination-input" name="destination" placeholder=" " type="text"
                           value="">
                    <button aria-label="目的地" class="uitk-faux-input" data-stid="location-field-destination-menu-trigger"
                            type="button"></button>
                    <div aria-hidden="true" class="uitk-field-label">目的地</div>
                    <svg aria-hidden="true" class="uitk-icon uitk-field-icon uitk-icon-medium" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <svg>
                        <path clip-rule="evenodd"
                              d="M5 9a7 7 0 1114 0c0 5.25-7 13-7 13S5 14.25 5 9zm4.5 0a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z"
                              fill-rule="evenodd"></path>
                      </svg>
                    </svg>
                  </div>
                  <div aria-hidden="true"
                       class="uitk-menu-container animation-disabled uitk-menu-pos-left uitk-menu-container-text-nowrap">
                    <div
                        class="uitk-flex uitk-flex-align-items-center uitk-toolbar uitk-typeahead-toolbar uitk-typeahead-toolbar-v1">
                      <section class="uitk-flex-item uitk-typeahead-toolbar-field toolbar-content-v1">
                        <div class="uitk-field has-no-visible-label has-placeholder">
                          <label class="uitk-field-label is-visually-hidden"
                                 for="location-field-destination">目的地</label>
                          <input id="location-field-destination" aria-invalid="false" aria-required="false"
                                 autocapitalize="off" autocomplete="off" autocorrect="off"
                                 class="uitk-field-input uitk-typeahead-input"
                                 data-stid="location-field-destination-menu-input" placeholder="目的地" spellcheck="false"
                                 type="text" value="">
                        </div>
                      </section>
                    </div>
                    <div class="uitk-empty-state uitk-type-center uitk-typeahead-empty-state">
                      <svg aria-hidden="true" class="uitk-icon uitk-empty-state-icon uitk-icon-large"
                           viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <svg>
                          <path clip-rule="evenodd"
                                d="M14.71 14h.79l4.99 5L19 20.49l-5-4.99v-.79l-.27-.28a6.5 6.5 0 11.7-.7l.28.27zM5 9.5a4.5 4.5 0 108.99.01A4.5 4.5 0 005 9.5z"
                                fill-rule="evenodd"></path>
                        </svg>
                      </svg>
                      <div class="uitk-text uitk-type-300 uitk-empty-state-body uitk-text-default-theme">
                        目的地や宿泊施設名、観光スポットで検索
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        class="uitk-layout-grid-item uitk-layout-grid-item-columnspan-small-2 uitk-layout-grid-item-columnspan-large-4">
      <div class="Dates">
        <input name="startDate" type="hidden" value="2021-12-13">
        <input name="endDate" type="hidden" value="2021-12-14">
        <div class="uitk-flex uitk-flex-row uitk-flex-gap-three uitk-flex-item uitk-date-fields uitk-flex-grow-1 ">
          <div class="uitk-flex-item uitk-flex-basis-zero uitk-flex-grow-1 uitk-date-field-wrapper">
            <div id="" class="uitk-date-picker-menu uitk-menu uitk-menu-mounted">
              <div class="uitk-field has-floatedLabel-label has-icon has-placeholder">
                <label class="uitk-field-label" for="d1">
                  <span aria-hidden="true">チェックイン日</span>
                </label>
                <input id="d1" aria-expanded="false" aria-invalid="false" aria-required="false"
                       class="uitk-field-input uitk-menu-trigger is-hidden" data-stid="input-date" name="d1"
                       placeholder="チェックイン日" type="text" value="2021-12-13">
                <button id="d1-btn" aria-label="チェックイン日 2021年12月月13日" class="uitk-faux-input uitk-form-field-trigger"
                        data-name="d1" data-stid="open-date-picker" type="button">12月13日
                </button>
                <button aria-hidden="true" class="is-visually-hidden" tabindex="-1" type="button"></button>
                <svg aria-hidden="true" class="uitk-icon uitk-field-icon uitk-icon-medium" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <svg>
                    <path clip-rule="evenodd"
                          d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-1.99 2L3 19a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 5v11H5V8h14zm-7 2H7v5h5v-5z"
                          fill-rule="evenodd"></path>
                  </svg>
                </svg>
              </div>
            </div>
          </div>
          <div class="uitk-flex-item uitk-flex-basis-zero uitk-flex-grow-1 uitk-date-field-wrapper">
            <div id=" " class="uitk-date-picker-menu uitk-menu uitk-menu-mounted">
              <div class="uitk-field has-floatedLabel-label has-icon has-placeholder">
                <label class="uitk-field-label" for="d2">
                  <span aria-hidden="true">チェックアウト日</span>
                </label>
                <input id="d2" aria-expanded="false" aria-invalid="false" aria-required="false"
                       class="uitk-field-input uitk-menu-trigger is-hidden" data-stid="input-date" name="d2"
                       placeholder="チェックアウト日" type="text" value="2021-12-14">
                <button id="d2-btn" aria-label="チェックアウト日 2021年12月月14日" class="uitk-faux-input uitk-form-field-trigger"
                        data-name="d2" data-stid="open-date-picker" type="button">12月14日
                </button>
                <button aria-hidden="true" class="is-visually-hidden" tabindex="-1" type="button"></button>
                <svg aria-hidden="true" class="uitk-icon uitk-field-icon uitk-icon-medium" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <svg>
                    <path clip-rule="evenodd"
                          d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-1.99 2L3 19a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 5v11H5V8h14zm-7 2H7v5h5v-5z"
                          fill-rule="evenodd"></path>
                  </svg>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        class="uitk-layout-grid-item TravelersField uitk-layout-grid-item-columnspan-small-2 uitk-layout-grid-item-columnspan-large-3">
      <div class="uitk-experimental-adaptive">
        <div id="adaptive-menu" class="uitk-menu uitk-menu-mounted">
          <div class="uitk-field has-floatedLabel-label has-icon has-placeholder">
            <label class="uitk-field-label">旅行者</label>
            <input aria-invalid="false" aria-required="false" class="uitk-field-input is-hidden"
                   placeholder="Placeholder" type="text" value="1 室 1 名">
            <button aria-label="1 室 1 名" class="uitk-fake-input uitk-form-field-trigger"
                    data-testid="travelers-field-trigger" type="button">1 室 1 名
            </button>
            <svg aria-hidden="true" class="uitk-icon uitk-field-icon uitk-icon-medium" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <svg>
                <path clip-rule="evenodd" d="M16 8a4 4 0 11-8 0 4 4 0 018 0zM4 18c0-2.66 5.33-4 8-4s8 1.34 8 4v2H4v-2z"
                      fill-rule="evenodd"></path>
              </svg>
            </svg>
          </div>
          <div aria-hidden="true"
               class="uitk-menu-container animation-disabled uitk-menu-pos-right uitk-menu-container-autoposition uitk-menu-container-text-nowrap">
            <div aria-label="旅行者の選択ページが開かれました。以下で旅行者の情報を変更してください。">
              <div class="all-x-padding-one all-t-padding-two">
                <h3 class="uitk-heading-5">旅行者</h3>
              </div>
              <section class="uitk-cell all-x-padding-one all-t-padding-half all-b-padding-twelve uitk-scroll-vertical">
                <div
                    class="uitk-spacing roomPickerRoom uitk-spacing-margin-blockstart-unset uitk-spacing-padding-blockstart-unset"
                    data-testid="room-1">
                  <div aria-label="客室 1 (1 室中)" class="uitk-spacing uitk-spacing-padding-blockstart-two"
                       data-testid="room-header" tabindex="0">
                    <h3 aria-hidden="true" class="uitk-heading-7">客室 1</h3>
                  </div>
                  <div
                      class="uitk-flex uitk-flex-align-items-center uitk-flex-justify-content-space-between uitk-step-input adultStepInput uitk-step-input-mounted">
                    <label class="uitk-flex-item uitk-flex-grow-1 uitk-step-input-label" for="adult-input-0">大人</label>
                    <div class="uitk-flex uitk-flex-item uitk-step-input-controls">
                      <button class="uitk-flex-item uitk-step-input-button" disabled="" type="button">
                        <svg aria-labelledby="uitk-step-decrease-大人-192-title"
                             class="uitk-icon uitk-step-input-icon uitk-icon-medium" role="img" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                          <title id="uitk-step-decrease-大人-192-title">客室1の大人の人数を減らす</title>
                          <svg>
                            <path d="M19 13H5v-2h14v2z"></path>
                          </svg>
                        </svg>
                      </button>
                      <input id="adult-input-0" class="uitk-flex-item uitk-step-input-value" max="14" min="1"
                             readonly="" tabindex="-1" type="text" value="1">
                      <button class="uitk-flex-item uitk-step-input-button" type="button">
                        <svg aria-labelledby="uitk-step-increase-大人-268-title"
                             class="uitk-icon uitk-step-input-icon uitk-icon-medium" role="img" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                          <title id="uitk-step-increase-大人-268-title">客室1の大人の人数を増やす</title>
                          <svg>
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                          </svg>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                      class="uitk-flex uitk-flex-align-items-center uitk-flex-justify-content-space-between uitk-step-input childStepInput uitk-step-input-mounted">
                    <label class="uitk-flex-item uitk-flex-grow-1 uitk-step-input-label" for="child-input-0">子供
                      <span class="uitk-step-input-label-caption">年齢 0 ～ 17 歳</span>
                    </label>
                    <div class="uitk-flex uitk-flex-item uitk-step-input-controls">
                      <button class="uitk-flex-item uitk-step-input-button" disabled="" type="button">
                        <svg aria-labelledby="uitk-step-decrease-子供-573-title"
                             class="uitk-icon uitk-step-input-icon uitk-icon-medium" role="img" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                          <title id="uitk-step-decrease-子供-573-title">客室1の子供の人数を減らす</title>
                          <svg>
                            <path d="M19 13H5v-2h14v2z"></path>
                          </svg>
                        </svg>
                      </button>
                      <input id="child-input-0" class="uitk-flex-item uitk-step-input-value" max="6" min="0" readonly=""
                             tabindex="-1" type="text" value="0">
                      <button class="uitk-flex-item uitk-step-input-button" type="button">
                        <svg aria-labelledby="uitk-step-increase-子供-591-title"
                             class="uitk-icon uitk-step-input-icon uitk-icon-medium"
                             role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title
                            id="uitk-step-increase-子供-591-title">客室1の子供の人数を増やす</title>
                          <svg>
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                          </svg>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="addRoomButton uitk-type-right">
                  <button class="uitk-button uitk-button-medium uitk-button-has-text uitk-button-tertiary"
                          data-testid="add-room-button" type="button">客室を追加する
                  </button>
                </div>
                <div class="all-t-padding-two all-b-padding-six"></div>
              </section>
              <div class="uitk-scrim guestsDoneBtn fade-button">
                <button
                    class="uitk-button uitk-button-large uitk-button-fullWidth uitk-button-has-text uitk-button-primary uitk-button-floating-full-width"
                    data-testid="guests-done-button" type="button">完了
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input data-testid="rooms-input" name="rooms" type="hidden" value="1"><input data-testid="adults-input"
                                                                                   name="adults" type="hidden"
                                                                                   value="1"></div>
    <div
        class="uitk-layout-grid-item uitk-layout-grid-item-columnspan-small-1 uitk-layout-grid-item-columnspan-large-2">
      <div class="uitk-flex uitk-flex-nowrap uitk-switch uitk-checkbox"><input id="add-flight-switch"
                                                                               class="uitk-flex-item uitk-flex-shrink-0 uitk-flex-item"
                                                                               icon="check" name="add-flight-switch"
                                                                               type="checkbox" value="false"><span
          aria-hidden="true" class="uitk-flex-item uitk-flex-shrink-0 uitk-switch-control"></span>
        <div class="uitk-flex-item uitk-flex-grow-1 uitk-switch-content"><label
            class="uitk-checkbox-switch-label uitk-switch-label" for="add-flight-switch"><span>航空券を追加する</span></label>
        </div>
      </div>
    </div>
    <div
        class="uitk-layout-grid-item uitk-layout-grid-item-columnspan-small-1 uitk-layout-grid-item-columnspan-large-2">
      <div class="uitk-flex uitk-flex-nowrap uitk-switch uitk-checkbox"><input id="add-car-switch"
                                                                               class="uitk-flex-item uitk-flex-shrink-0 uitk-flex-item"
                                                                               icon="check" name="add-car-switch"
                                                                               type="checkbox" value="false"><span
          aria-hidden="true" class="uitk-flex-item uitk-flex-shrink-0 uitk-switch-control"></span>
        <div class="uitk-flex-item uitk-flex-grow-1 uitk-switch-content"><label
            class="uitk-checkbox-switch-label uitk-switch-label" for="add-car-switch"><span>レンタカーを追加する</span></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelPicker"
}
</script>

<style scoped>

</style>
