import ProductModel from "./models/productModel.js";

let pm = new ProductModel();

const sampleProducts = [
  {
    "id": "1",
    "name": "Chăn Cotton Cao Cấp Everon",
    "price": 750000, // Roughly 30-35 USD, common for good quality cotton blanket
    "quantity": 60,
    "description": "Chăn cotton mềm mại, thoáng khí, mang lại cảm giác thoải mái tối đa cho giấc ngủ của bạn. Thích hợp cho mọi mùa trong năm."
  },
  {
    "id": "2",
    "name": "Gối Lông Vũ Everon Standard",
    "price": 320000, // Around 13-15 USD for a standard feather pillow
    "quantity": 45,
    "description": "Gối lông vũ êm ái, nâng đỡ đầu và cổ hoàn hảo, giúp bạn có một giấc ngủ sâu và trọn vẹn."
  },
  {
    "id": "3",
    "name": "Nệm Cao Su Thiên Nhiên Everon Luxe",
    "price": 8500000, // Premium natural latex mattress, significantly higher price
    "quantity": 15,
    "description": "Nệm cao su thiên nhiên 100%, độ đàn hồi tối ưu, nâng đỡ cơ thể, giảm áp lực và mang lại sự thoải mái vượt trội."
  },
  {
    "id": "4",
    "name": "Bộ Ga Gối Cotton Lụa Everon (Đơn)",
    "price": 980000, // Set for a single bed
    "quantity": 24,
    "description": "Bộ ga và gối cotton lụa cao cấp, mềm mại, mát mẻ, tạo điểm nhấn sang trọng cho phòng ngủ của bạn."
  },
  {
    "id": "5",
    "name": "Chăn Lông Cừu Tổng Hợp Everon Warm",
    "price": 600000, // Synthetic fleece blanket
    "quantity": 36,
    "description": "Chăn lông cừu tổng hợp ấm áp, nhẹ nhàng, lý tưởng cho những đêm se lạnh hoặc mùa đông."
  },
  {
    "id": "6",
    "name": "Gối Ôm Cotton Everon",
    "price": 180000, // Standard bolster pillow
    "quantity": 75,
    "description": "Gối ôm cotton mềm mại, êm ái, mang lại cảm giác thư giãn và thoải mái khi ngủ."
  },
  {
    "id": "7",
    "name": "Nệm Bông Ép Everon Comfort",
    "price": 2500000, // Mid-range compressed cotton mattress
    "quantity": 20,
    "description": "Nệm bông ép chất lượng cao, độ phẳng tối ưu, không gây lún xẹp, tốt cho cột sống. Vỏ bọc kháng khuẩn."
  },
  {
    "id": "8",
    "name": "Chăn Hè Cotton Mỏng Everon Air",
    "price": 450000, // Thin summer blanket
    "quantity": 50,
    "description": "Chăn hè mỏng nhẹ, chất liệu cotton thoáng mát, giúp điều hòa nhiệt độ cơ thể trong những ngày nóng."
  },
  {
    "id": "9",
    "name": "Gối Cao Su Non Everon Ergonomic",
    "price": 480000, // Memory foam pillow
    "quantity": 42,
    "description": "Gối cao su non (memory foam) định hình, ôm sát đường cong đầu và cổ, giảm đau mỏi vai gáy hiệu quả."
  },
  {
    "id": "10",
    "name": "Bộ Ga Gối Cotton Hàn Quốc Everon Queen",
    "price": 1350000, // Queen size cotton set
    "quantity": 30,
    "description": "Bộ ga và gối cotton nhập khẩu Hàn Quốc, họa tiết tinh tế, chất liệu mềm mại, tạo không gian phòng ngủ hiện đại."
  },
  {
    "id": "11",
    "name": "Chăn Chần Bông Cao Cấp Everon Diamond",
    "price": 1100000, // Quilted comforter
    "quantity": 27,
    "description": "Chăn chần bông dày dặn, giữ ấm tốt, với họa tiết chần sang trọng, phù hợp cho mùa đông."
  },
  {
    "id": "12",
    "name": "Nệm Lò Xo Túi Độc Lập Everon Gold",
    "price": 6200000, // Pocket spring mattress
    "quantity": 12,
    "description": "Nệm lò xo túi độc lập, hạn chế tối đa sự rung động, mang lại giấc ngủ êm ái không ảnh hưởng bởi cử động người nằm cạnh."
  },
  {
    "id": "13",
    "name": "Gối Tựa Lưng Everon Decor",
    "price": 150000, // Decorative back pillow
    "quantity": 39,
    "description": "Gối tựa lưng đa năng, dùng để trang trí sofa, giường ngủ hoặc hỗ trợ cột sống khi ngồi."
  },
  {
    "id": "14",
    "name": "Bộ Ga Gối Lụa Tencel Everon King",
    "price": 2800000, // King size Tencel silk set
    "quantity": 18,
    "description": "Bộ ga và gối Tencel lụa cao cấp, mềm mại như lụa, thoáng mát, thân thiện với môi trường và làn da nhạy cảm."
  },
  {
    "id": "15",
    "name": "Chăn Đông Vải Nỉ Everon Cozy",
    "price": 550000, // Flannel winter blanket
    "quantity": 30,
    "description": "Chăn vải nỉ ấm áp, nhẹ nhàng, giữ nhiệt tốt, mang lại cảm giác dễ chịu trong những ngày lạnh giá."
  },
  {
    "id": "16",
    "name": "Gối Cao Su Thiên Nhiên Everon Kids",
    "price": 280000, // Kids' natural latex pillow
    "quantity": 30,
    "description": "Gối cao su thiên nhiên nhỏ gọn, thiết kế đặc biệt cho trẻ em, nâng đỡ nhẹ nhàng và an toàn cho bé."
  },
  {
    "id": "17",
    "name": "Nệm Cuộn Everon Travel",
    "price": 950000, // Roll-up travel mattress
    "quantity": 25,
    "description": "Nệm cuộn tiện lợi, dễ dàng di chuyển và cất giữ, lý tưởng cho những chuyến đi hoặc không gian nhỏ."
  },
  {
    "id": "18",
    "name": "Chăn Lụa Tơ Tằm Everon Silk",
    "price": 1800000, // Silk blanket
    "quantity": 15,
    "description": "Chăn lụa tơ tằm mềm mại, nhẹ nhàng, sang trọng, mang lại cảm giác mát mẻ vào mùa hè và ấm áp vào mùa đông."
  },
  {
    "id": "19",
    "name": "Gối Trang Trí Sofa Everon",
    "price": 120000, // Sofa decorative pillow
    "quantity": 40,
    "description": "Gối trang trí với nhiều màu sắc và kiểu dáng, tạo điểm nhấn cho bộ sofa và không gian phòng khách của bạn."
  },
  {
    "id": "20",
    "name": "Nệm Gấp 3 Bông Ép Everon Slim",
    "price": 1900000, // Tri-fold compressed cotton mattress
    "quantity": 18,
    "description": "Nệm bông ép gấp 3 tiện lợi, dễ dàng gấp gọn khi không sử dụng, tiết kiệm không gian."
  },
  {
    "id": "21",
    "name": "Chăn Tuyết Nhung Everon Plush",
    "price": 700000, // Plush velvet blanket
    "quantity": 35,
    "description": "Chăn tuyết nhung siêu mềm, mịn, ấm áp, mang lại trải nghiệm êm ái và sang trọng."
  },
  {
    "id": "22",
    "name": "Gối Chống Ngáy Everon Anti-Snore",
    "price": 650000, // Anti-snore pillow
    "quantity": 20,
    "description": "Gối được thiết kế đặc biệt giúp hỗ trợ tư thế ngủ, giảm thiểu tình trạng ngáy, cải thiện chất lượng giấc ngủ."
  },
  {
    "id": "23",
    "name": "Nệm Cao Su Tổng Hợp Everon Basic",
    "price": 3500000, // Synthetic latex mattress
    "quantity": 10,
    "description": "Nệm cao su tổng hợp với độ đàn hồi tốt, thoáng khí, là lựa chọn kinh tế nhưng vẫn đảm bảo chất lượng giấc ngủ."
  },
  {
    "id": "24",
    "name": "Chăn Bốn Mùa Everon All-Season",
    "price": 900000, // All-season blanket
    "quantity": 28,
    "description": "Chăn đa năng, có thể sử dụng linh hoạt trong cả bốn mùa, giữ ấm vừa phải và thoáng khí."
  },
  {
    "id": "25",
    "name": "Gối Massage Everon Relax",
    "price": 550000, // Massage pillow
    "quantity": 22,
    "description": "Gối massage tích hợp công nghệ rung nhẹ, giúp thư giãn cơ bắp, giảm căng thẳng sau một ngày dài."
  },
  {
    "id": "26",
    "name": "Bộ Ga Gối Cotton Satin Everon Luxury",
    "price": 1650000, // Cotton satin bed linen set
    "quantity": 16,
    "description": "Bộ ga và gối cotton satin mềm mượt, bề mặt bóng nhẹ, mang lại vẻ đẹp sang trọng và cảm giác êm ái tuyệt vời."
  },
  {
    "id": "27",
    "name": "Chăn Điện Everon Warmth Pro",
    "price": 1200000, // Electric blanket
    "quantity": 8,
    "description": "Chăn điện an toàn, điều chỉnh nhiệt độ linh hoạt, giúp bạn giữ ấm cơ thể trong những ngày giá rét."
  },
  {
    "id": "28",
    "name": "Gối Đinh Hương Everon Aroma",
    "price": 380000, // Clove pillow
    "quantity": 25,
    "description": "Gối được nhồi đinh hương tự nhiên, có mùi thơm dễ chịu, giúp thư giãn tinh thần và dễ ngủ hơn."
  },
  {
    "id": "29",
    "name": "Nệm Y Tế Kháng Khuẩn Everon Health",
    "price": 4800000, // Anti-bacterial medical mattress
    "quantity": 7,
    "description": "Nệm y tế chuyên dụng, bề mặt kháng khuẩn, hỗ trợ tốt cho người bệnh hoặc người có vấn đề về xương khớp."
  },
  {
    "id": "30",
    "name": "Chăn Mùa Đông Everon UltraWarm",
    "price": 1500000, // Ultra-warm winter blanket
    "quantity": 10,
    "description": "Chăn siêu ấm, chất liệu cao cấp, giữ nhiệt tối đa, là sự lựa chọn hoàn hảo cho mùa đông cực lạnh."
  }
];

async function seed() {
  for (let i = 0; i < sampleProducts.length; i++) {
    const product = sampleProducts[i];
    await pm.add(
      product.id,
      product.name,
      product.price,
      product.quantity,
      product.description
    );
    console.log(`Inserted: ${product.name}`);
  }
  console.log('✅ All products inserted.');
}

function a() {
  for (let i = 0; i < sampleProducts.length; i++) {
    const product = sampleProducts[i];
    console.log(`${product.price}`);
  }
}

a();