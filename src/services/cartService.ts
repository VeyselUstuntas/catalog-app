import supabase from "@/plugin/supaBaseClients";
import { computed } from "vue";

export default {

  async getCart(userId: string | undefined) {
    const { data: cartData } = await supabase.from("carts").select(`id,amount,products(id, price, title, currency)`).eq("user_id", userId).order("id");
    return cartData;
  },

  async removeCartItem(userId: string | undefined, cartItemId: number) {
    const { data } = await supabase.from("carts").delete().eq("user_id", userId).eq("id", cartItemId);

  },

  async updateAmount(userId: string | undefined, cartItemId: number, amount: number) {
    await supabase.from("carts").update({ amount: amount }).eq("user_id", userId).eq("id", cartItemId)

  },

  async addCartItem(userId: string | undefined, productId: any) {
    await supabase.from("carts").insert({
      amount: 1,
      product_id: productId,
      user_id: userId
    });
  },

  calculateCartItemSum(cartItems: any[]) {
    if (!cartItems) return 0;
    return cartItems.reduce((acc: number, item: any) => {
      acc += item.products.price * item.amount;
      return acc;
    }, 0);
  }

}
