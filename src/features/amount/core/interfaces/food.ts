export interface IFullNutrient {
  attr_id: number
  value: number
}

export interface IMetadata {
  is_raw_food: boolean
}

export interface ITags {
  item: string
  measure?: any
  quantity: string
  food_group: number
  tag_id: number
}

export interface IAltMeasure {
  serving_weight: number
  measure: string
  seq?: number
  qty: number
}

export interface IPhoto {
  thumb: string
  highres: string
  is_user_uploaded: boolean
}

export interface IFood {
  food_name: string
  brand_name?: any
  serving_qty: number
  serving_unit: string
  serving_weight_grams: number
  nf_calories: number
  nf_total_fat: number
  nf_saturated_fat: number
  nf_cholesterol: number
  nf_sodium: number
  nf_total_carbohydrate: number
  nf_dietary_fiber: number
  nf_sugars: number
  nf_protein: number
  nf_potassium: number
  nf_p: number
  full_nutrients: IFullNutrient[]
  nix_brand_name?: any
  nix_brand_id?: any
  nix_item_name?: any
  nix_item_id?: any
  upc?: any
  consumed_at: Date
  metadata: IMetadata
  source: number
  ndb_no: number
  tags: ITags
  alt_measures: IAltMeasure[]
  lat?: any
  lng?: any
  meal_type: number
  photo: IPhoto
  sub_recipe?: any
  class_code?: any
  brick_code?: any
  tag_id?: any
}

export interface IInstanteResponse {
  foods: IFood[]
}
