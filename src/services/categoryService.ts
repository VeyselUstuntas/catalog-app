import supabase from "@/plugin/supaBaseClients";

export default {
  async getCategories() {
    const { data: categoriesData } = await supabase.from("categories").select();
    return categoriesData;
  },

  async getCategory(id: any) {
    return await supabase.from("categories").select().eq("id", id).single();
  }

}
