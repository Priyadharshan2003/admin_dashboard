import type { Schema, Struct } from '@strapi/strapi';

export interface CommunicationFeedbackRating extends Struct.ComponentSchema {
  collectionName: 'components_communication_feedback_ratings';
  info: {
    displayName: 'feedback-rating';
  };
  attributes: {
    communication_rating: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<5>;
    facility_rating: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
    feedback_comments: Schema.Attribute.Blocks;
    feedback_date: Schema.Attribute.DateTime;
    follow_up_required: Schema.Attribute.Boolean;
    overall_rating: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
    recommend_to_others: Schema.Attribute.Boolean;
    service_rating: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
    suggestions: Schema.Attribute.Blocks;
  };
}

export interface CommunicationNotificationSettings
  extends Struct.ComponentSchema {
  collectionName: 'components_communication_notification_settings';
  info: {
    displayName: 'notification-settings';
  };
  attributes: {
    email_notifications: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    notification_categories: Schema.Attribute.JSON;
    notification_frequency: Schema.Attribute.Enumeration<
      ['immediate', 'daily', 'weekly', 'monthly']
    >;
    push_notifications: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    quiet_hours_end: Schema.Attribute.Time;
    quiet_hours_start: Schema.Attribute.Time;
    sms_notifications: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    whatsapp_notifications: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface ContactAddress extends Struct.ComponentSchema {
  collectionName: 'components_contact_addresses';
  info: {
    displayName: 'address';
    icon: 'briefcase';
  };
  attributes: {
    address_type: Schema.Attribute.Enumeration<
      ['residential', 'commercial', 'office', 'site']
    >;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    coordinates: Schema.Attribute.JSON;
    country: Schema.Attribute.String & Schema.Attribute.DefaultTo<'India'>;
    landmark: Schema.Attribute.String;
    postal_code: Schema.Attribute.String & Schema.Attribute.Required;
    state: Schema.Attribute.String & Schema.Attribute.Required;
    street_address: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_details';
  info: {
    displayName: 'contact-details';
    icon: 'phone';
  };
  attributes: {
    contact_notes: Schema.Attribute.Blocks;
    email: Schema.Attribute.Email;
    preferred_contact_method: Schema.Attribute.Enumeration<
      ['phone', 'email', 'whatsapp']
    > &
      Schema.Attribute.DefaultTo<'phone'>;
    primary_phone: Schema.Attribute.String & Schema.Attribute.Required;
    secondary_phone: Schema.Attribute.String;
    whatsapp_number: Schema.Attribute.String;
  };
}

export interface LocationLocationDetails extends Struct.ComponentSchema {
  collectionName: 'components_location_location_details';
  info: {
    displayName: 'location-details';
    icon: 'pinMap';
  };
  attributes: {
    accuracy: Schema.Attribute.Decimal;
    address: Schema.Attribute.Component<'contact.address', false>;
    altitude: Schema.Attribute.Decimal;
    coordinates: Schema.Attribute.JSON;
    location_type: Schema.Attribute.Enumeration<
      ['home', 'office', 'site', 'other']
    >;
    timestamp: Schema.Attribute.DateTime;
    verified: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface LocationPlotSpecifications extends Struct.ComponentSchema {
  collectionName: 'components_location_plot_specifications';
  info: {
    displayName: 'plot-specifications';
  };
  attributes: {
    built_up_area: Schema.Attribute.Decimal;
    carpet_area: Schema.Attribute.Decimal;
    corner_plot: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    elevation: Schema.Attribute.Decimal;
    facing: Schema.Attribute.Enumeration<
      [
        'north',
        'south',
        'east',
        'west',
        'north_east',
        'north_west',
        'south_east',
        'south_west',
      ]
    >;
    main_road_facing: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    park_facing: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    plot_boundaries: Schema.Attribute.JSON;
    plot_size: Schema.Attribute.String;
    plot_type: Schema.Attribute.Enumeration<
      ['residential', 'commercial', 'industrial']
    >;
    road_width: Schema.Attribute.Integer;
    soil_type: Schema.Attribute.String;
  };
}

export interface MediaDocumentSet extends Struct.ComponentSchema {
  collectionName: 'components_media_document_sets';
  info: {
    displayName: 'document-set';
    icon: 'file';
  };
  attributes: {
    document_file: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    document_name: Schema.Attribute.String & Schema.Attribute.Required;
    document_notes: Schema.Attribute.Blocks;
    document_number: Schema.Attribute.String;
    document_type: Schema.Attribute.Enumeration<
      ['legal', 'technical', 'financial', 'identity', 'agreement', 'other']
    >;
    expiry_date: Schema.Attribute.Date;
    issue_date: Schema.Attribute.Date;
    issuing_authority: Schema.Attribute.String;
    verification_status: Schema.Attribute.Enumeration<
      ['pending', 'verified', 'rejected']
    >;
  };
}

export interface MediaMediaGallery extends Struct.ComponentSchema {
  collectionName: 'components_media_media_galleries';
  info: {
    displayName: 'media-gallery';
  };
  attributes: {
    documents: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    featured_image: Schema.Attribute.Media<'images' | 'files'>;
    gallery_description: Schema.Attribute.Blocks;
    gallery_title: Schema.Attribute.String;
    images: Schema.Attribute.Media<'files' | 'images', true>;
    videos: Schema.Attribute.Media<'files' | 'videos', true>;
    virtual_tour_url: Schema.Attribute.String;
  };
}

export interface PriceDetailsFinancial extends Struct.ComponentSchema {
  collectionName: 'components_price_details_financials';
  info: {
    displayName: 'financial';
  };
  attributes: {
    base_price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    current_price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    discount_amount: Schema.Attribute.Decimal;
    discount_percentage: Schema.Attribute.Decimal;
    maintenance_charges: Schema.Attribute.Decimal;
    other_charges: Schema.Attribute.Decimal;
    price_per_sqft: Schema.Attribute.Decimal;
    price_valid_until: Schema.Attribute.Date;
    registration_charges: Schema.Attribute.Decimal;
    total_amount: Schema.Attribute.Decimal;
  };
}

export interface PriceDetailsPaymentDetails extends Struct.ComponentSchema {
  collectionName: 'components_price_details_payment_details';
  info: {
    displayName: 'payment-details';
  };
  attributes: {
    bank_name: Schema.Attribute.String;
    cheque_number: Schema.Attribute.String;
    payment_date: Schema.Attribute.Date;
    payment_method: Schema.Attribute.Enumeration<
      ['cash', 'cheque', 'online', 'bank_transfer', 'emi', 'loan']
    >;
    payment_notes: Schema.Attribute.Blocks;
    payment_proof: Schema.Attribute.Media<'images' | 'files'>;
    payment_status: Schema.Attribute.Enumeration<
      ['pending', 'processing', 'completed', 'failed', 'refunded']
    >;
    reference_number: Schema.Attribute.String;
    transaction_id: Schema.Attribute.String;
  };
}

export interface SystemAuditTrail extends Struct.ComponentSchema {
  collectionName: 'components_system_audit_trails';
  info: {
    displayName: 'audit-trail';
    icon: 'cog';
  };
  attributes: {
    change_log: Schema.Attribute.JSON;
    file_created_at: Schema.Attribute.DateTime;
    file_created_by: Schema.Attribute.Relation<
      'oneToOne',
      'api::chat-message.chat-message'
    >;
    file_updated_at: Schema.Attribute.DateTime;
    ip_address: Schema.Attribute.String;
    user_agent: Schema.Attribute.String;
    version: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
  };
}

export interface SystemStatusTracking extends Struct.ComponentSchema {
  collectionName: 'components_system_status_trackings';
  info: {
    displayName: 'status-tracking';
    icon: 'stack';
  };
  attributes: {
    auto_status_change: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    current_status: Schema.Attribute.String & Schema.Attribute.Required;
    next_action_date: Schema.Attribute.DateTime;
    next_action_required: Schema.Attribute.String;
    previous_status: Schema.Attribute.String;
    status_changed_at: Schema.Attribute.DateTime;
    status_changed_by: Schema.Attribute.Relation<
      'oneToMany',
      'api::chat-message.chat-message'
    >;
    status_reason: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'communication.feedback-rating': CommunicationFeedbackRating;
      'communication.notification-settings': CommunicationNotificationSettings;
      'contact.address': ContactAddress;
      'contact.contact-details': ContactContactDetails;
      'location.location-details': LocationLocationDetails;
      'location.plot-specifications': LocationPlotSpecifications;
      'media.document-set': MediaDocumentSet;
      'media.media-gallery': MediaMediaGallery;
      'price-details.financial': PriceDetailsFinancial;
      'price-details.payment-details': PriceDetailsPaymentDetails;
      'system.audit-trail': SystemAuditTrail;
      'system.status-tracking': SystemStatusTracking;
    }
  }
}
