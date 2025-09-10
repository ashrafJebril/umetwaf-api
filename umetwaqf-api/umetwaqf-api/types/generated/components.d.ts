import type { Schema, Struct } from '@strapi/strapi';

export interface AllCampaignsAllCampaigns extends Struct.ComponentSchema {
  collectionName: 'components_all_campaigns_all_campaigns';
  info: {
    displayName: 'all-campaigns';
  };
  attributes: {
    campaign: Schema.Attribute.Relation<'oneToOne', 'api::campaign.campaign'>;
  };
}

export interface AllCampaignsSlider extends Struct.ComponentSchema {
  collectionName: 'components_all_campaigns_sliders';
  info: {
    displayName: 'slider';
  };
  attributes: {
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface BankCurrenciesBankCurrencies extends Struct.ComponentSchema {
  collectionName: 'components_bank_currencies_bank_currencies';
  info: {
    description: '';
    displayName: 'bankCurrencies';
  };
  attributes: {
    accountNumber: Schema.Attribute.Text & Schema.Attribute.Required;
    currencyName: Schema.Attribute.String & Schema.Attribute.Required;
    iban: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface BankDetailsBankDetails extends Struct.ComponentSchema {
  collectionName: 'components_bank_details_bank_details';
  info: {
    description: '';
    displayName: 'bankDetails';
  };
  attributes: {
    accountName: Schema.Attribute.String & Schema.Attribute.Required;
    bankImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    bankName: Schema.Attribute.String & Schema.Attribute.Required;
    branch: Schema.Attribute.String & Schema.Attribute.Required;
    branchNumber: Schema.Attribute.String & Schema.Attribute.Required;
    currency: Schema.Attribute.Component<
      'bank-currencies.bank-currencies',
      true
    >;
    swift: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CampaignDetailsCampaignDetails extends Struct.ComponentSchema {
  collectionName: 'components_campaign_details_campaign_details';
  info: {
    description: '';
    displayName: 'campaign-details';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    videoLink: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeMainImageHomeMainImage extends Struct.ComponentSchema {
  collectionName: 'components_home_main_image_home_main_images';
  info: {
    description: '';
    displayName: 'homeMainImage';
  };
  attributes: {
    campaign: Schema.Attribute.Relation<'oneToOne', 'api::campaign.campaign'>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeMainImageImageSlider extends Struct.ComponentSchema {
  collectionName: 'components_home_main_image_image_sliders';
  info: {
    description: '';
    displayName: 'imageSlider';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    images: Schema.Attribute.Media<'images', true>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HowToDonateHowToDonate extends Struct.ComponentSchema {
  collectionName: 'components_how_to_donate_how_to_donates';
  info: {
    description: '';
    displayName: 'howToDonate';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    textLink: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    videoLink: Schema.Attribute.String;
  };
}

export interface SaysAboutWaqfSaysAboutWaqf extends Struct.ComponentSchema {
  collectionName: 'components_says_about_waqf_says_about_waqfs';
  info: {
    description: '';
    displayName: 'SaysAboutWaqf';
  };
  attributes: {
    context: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image_thumbnail: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsGiveAway extends Struct.ComponentSchema {
  collectionName: 'components_sections_give_aways';
  info: {
    displayName: 'give_away';
  };
  attributes: {
    amount: Schema.Attribute.String;
    email: Schema.Attribute.String;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface SectionsList extends Struct.ComponentSchema {
  collectionName: 'components_sections_lists';
  info: {
    description: '';
    displayName: 'list';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMuftiOfAlAqsa extends Struct.ComponentSchema {
  collectionName: 'components_sections_mufti_of_al_aqsas';
  info: {
    displayName: 'Mufti of Al-Aqsa';
  };
  attributes: {
    context: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPaymentInfo1 extends Struct.ComponentSchema {
  collectionName: 'components_sections_payment_info_1s';
  info: {
    description: '';
    displayName: 'payment_info';
  };
  attributes: {
    img: Schema.Attribute.Media<'images'>;
    list: Schema.Attribute.Component<'sections.list', true>;
  };
}

export interface SectionsSections extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections';
  info: {
    description: '';
    displayName: 'sections';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.String;
  };
}

export interface SectionsZakaOfAqsa extends Struct.ComponentSchema {
  collectionName: 'components_sections_zaka_of_aqsas';
  info: {
    displayName: 'zaka_of_aqsa';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface UmetWaqfProductsList extends Struct.ComponentSchema {
  collectionName: 'components_umet_waqf_products_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    point: Schema.Attribute.String;
  };
}

export interface UmetWaqfProductsProduct extends Struct.ComponentSchema {
  collectionName: 'components_umet_waqf_products_products';
  info: {
    description: '';
    displayName: 'product';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface UmetWaqfProductsVideoList extends Struct.ComponentSchema {
  collectionName: 'components_umet_waqf_products_video_lists';
  info: {
    description: '';
    displayName: 'video_list';
  };
  attributes: {
    video_frame: Schema.Attribute.Text;
  };
}

export interface VideoSliderVideoSlider extends Struct.ComponentSchema {
  collectionName: 'components_video_slider_video_sliders';
  info: {
    description: '';
    displayName: 'video-slider';
  };
  attributes: {
    link: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'all-campaigns.all-campaigns': AllCampaignsAllCampaigns;
      'all-campaigns.slider': AllCampaignsSlider;
      'bank-currencies.bank-currencies': BankCurrenciesBankCurrencies;
      'bank-details.bank-details': BankDetailsBankDetails;
      'campaign-details.campaign-details': CampaignDetailsCampaignDetails;
      'home-main-image.home-main-image': HomeMainImageHomeMainImage;
      'home-main-image.image-slider': HomeMainImageImageSlider;
      'how-to-donate.how-to-donate': HowToDonateHowToDonate;
      'says-about-waqf.says-about-waqf': SaysAboutWaqfSaysAboutWaqf;
      'sections.give-away': SectionsGiveAway;
      'sections.list': SectionsList;
      'sections.mufti-of-al-aqsa': SectionsMuftiOfAlAqsa;
      'sections.payment-info-1': SectionsPaymentInfo1;
      'sections.sections': SectionsSections;
      'sections.zaka-of-aqsa': SectionsZakaOfAqsa;
      'umet-waqf-products.list': UmetWaqfProductsList;
      'umet-waqf-products.product': UmetWaqfProductsProduct;
      'umet-waqf-products.video-list': UmetWaqfProductsVideoList;
      'video-slider.video-slider': VideoSliderVideoSlider;
    }
  }
}
