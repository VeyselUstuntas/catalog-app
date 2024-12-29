import supabase from "@/plugin/supaBaseClients";

export default {
  async getProducts(categoryId: string | string[]) {
    return await supabase.from("products").select().eq("category_id", categoryId);

  }
}
