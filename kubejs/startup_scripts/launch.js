// priority: 0

onEvent('item.registry', event => {

	let types = ['Nether', 'Certus']
	let dtypes = ['下界の水晶の', 'トゥルークォーツ']
	types.forEach((e, index) => {
		let id = e.toLowerCase()
		const dname = dtypes[index];
		event.create('growing_' + id + '_seed').type('create:sequenced_assembly').texture("appliedenergistics2:item/crystal_seed_" + id).displayName('シード' + dname)
		event.create('tiny_' + id + '_crystal').texture("appliedenergistics2:item/crystal_seed_" + id + "2").displayName('小さな結晶' + dname)
		event.create('growing_tiny_' + id + '_crystal').type('create:sequenced_assembly').texture("appliedenergistics2:item/crystal_seed_" + id + "2").displayName('小さな結晶' + dname)
		event.create('small_' + id + '_crystal').texture("appliedenergistics2:item/crystal_seed_" + id + "3").displayName('小クリスタル' + dname)
		event.create('growing_small_' + id + '_crystal').type('create:sequenced_assembly').texture("appliedenergistics2:item/crystal_seed_" + id + "3").displayName('小クリスタル' + dname)
	});

	event.create('growing_fluix_seed').type('create:sequenced_assembly').texture("appliedenergistics2:item/crystal_seed_fluix").displayName('変更可能な種子')
	event.create('tiny_fluix_crystal').texture("appliedenergistics2:item/crystal_seed_fluix2").displayName('小さな気まぐれな結晶')
	event.create('growing_tiny_fluix_crystal').type('create:sequenced_assembly').texture("appliedenergistics2:item/crystal_seed_fluix2").displayName('小さな気まぐれな結晶')
	event.create('small_fluix_crystal').texture("appliedenergistics2:item/crystal_seed_fluix3").displayName('小さな気まぐれな結晶')
	event.create('growing_small_fluix_crystal').type('create:sequenced_assembly').texture("appliedenergistics2:item/crystal_seed_fluix3").displayName('小さな気まぐれな結晶')



	let processors = ["Calculation", "Logic", "Engineering"]
	processors.forEach(name => {
		let e = name.toLowerCase()
		event.create('incomplete_' + e + '_processor').type('create:sequenced_assembly').texture('kubejs:item/incomplete_' + e + '_processor').displayName('未完成' + name + 'プロセッサー')
	})

	let number = (name, dname) => {
		let id = name.toLowerCase()
		event.create(id).texture("kubejs:item/" + id).glow(true).displayName(dname)
	}

	number('Zero', 'ゼロ')
	number('One', 'ひとつ')
	number('Two', 'ふたつ')
	number('Three', 'スリー')
	number('Four', '4名')
	number('Five', 'ファイブ')
	number('Six', 'シックス')
	number('Seven', 'セブン')
	number('Eight', 'エイト')
	number('Nine', 'ナイン')
	number('Plus', 'それに')
	number('Minus', 'マイナス')
	number('Multiply', '乗算')
	number('Divide', '核分裂')

	let mechanism = (name, rarity, dname) => {
		let id = name.toLowerCase()
		event.create(id + '_mechanism').texture("kubejs:item/" + id + "_mechanism").displayName(dname + 'メカニズム').rarity(rarity)
		event.create('incomplete_' + id + '_mechanism').texture("kubejs:item/incomplete_" + id + "_mechanism").type('create:sequenced_assembly').displayName('未完成' + dname + 'メカニズム')
	}

	event.create('radiant_coil').glow(true).texture("kubejs:item/radiant_coil").displayName('シャイニング誘導コイル')
	event.create('radiant_sheet').glow(true).texture("kubejs:item/radiant_sheet").displayName('シャイニング・リーフ')

	mechanism('Kinetic', RARITY_COMMON, 'キネティック')
	mechanism('Sealed', RARITY_COMMON, 'ハーメチック')
	mechanism('Infernal', RARITY_UNCOMMON, 'インファナル')
	mechanism('Inductive', RARITY_UNCOMMON, '誘導性')
	mechanism('Abstruse', RARITY_RARE, 'ミステリアス')
	mechanism('Calculation', RARITY_RARE, '推定')

	let slime_types = ["Earth", "Sky", "Ender"]
	let slime_colours = [0x8FDB84, 0x00F9DE, 0xAC2EFC]

	for (i = 0; i < slime_types.length; i++) {
		let name = slime_types[i]
		let id = name.toLowerCase()
		event.create(`${id}_slimy_fern_leaf`)
			.color(0, slime_colours[i])
			.texture("kubejs:item/slimy_fern_leaf")
			.displayName(`ナメクジの葉`)
		event.create(`${id}_slime_fern_paste`)
			.color(0, slime_colours[i])
			.texture("kubejs:item/ground_slimy_fern")
			.displayName(`ナメクジシダの混合物`)
	}

	// Misc / Integration
	event.create('pipe_module_utility').texture("kubejs:item/pipe_module_utility").displayName('サービス・パイプ・モジュール')
	event.create('pipe_module_tier_1').texture("kubejs:item/pipe_module_tier_1").displayName('真鍮パイプモジュール')
	event.create('pipe_module_tier_2').texture("kubejs:item/pipe_module_tier_2").displayName('インバー・パイプ・モジュール')
	event.create('pipe_module_tier_3').texture("kubejs:item/pipe_module_tier_3").displayName('エンデリウム・チューブ・モジュール')
	event.create('circuit_scrap').texture("kubejs:item/circuit_scrap").displayName('マイクロチップ・スクラップ')

	event.create('charged_calculator').texture("kubejs:item/charged_calculator").displayName('電卓').maxDamage(64)
	event.create('missingno').texture("kubejs:item/missingno").displayName('∄')
	event.create('zinc_dust').texture("kubejs:item/zinc_dust").displayName('亜鉛粉')
	event.create('zinc_sheet').texture("kubejs:item/zinc_sheet").displayName('亜鉛シート')
	event.create('creosote_pellet').texture("kubejs:item/creosote_pellet").displayName('Creosote Pellet')
	event.create('sand_ball').texture("kubejs:item/sand_ball").displayName('砂のボール').unstackable()
	event.create('rough_sand').texture("kubejs:item/rough_sand").displayName('砂のかけら')
	event.create('purified_sand').texture("kubejs:item/purified_sand").displayName('洗浄した砂')
	event.create('silicon_compound').texture("kubejs:item/silicon_compound").displayName('シリコン化合物')
	event.create('smoke_mote').texture("kubejs:item/smoke_mote").displayName('小さな煙')
	event.create('incomplete_coke_chunk').texture("kubejs:item/incomplete_coke_chunk").type('create:sequenced_assembly').displayName('コークス炉用石炭')
	event.create('coke_chunk').texture("kubejs:item/coke_chunk").displayName('コークス炉用石炭の塊')

	event.create('matter_plastics').texture("kubejs:item/matter_plastics").displayName('布プラスチック')
	event.create('nickel_compound').texture("kubejs:item/nickel_compound").displayName('ニッケル化合物')
	event.create('invar_compound').texture("kubejs:item/invar_compound").type('create:sequenced_assembly').displayName('未加工インバー・インゴット')
	event.create('dye_entangled_singularity').texture("kubejs:item/dye_entangled_singularity").unstackable().displayName('色彩的特異点')
	event.create('chromatic_resonator').texture("kubejs:item/chromatic_resonator").displayName('クロマチック・レゾネーター').maxDamage(512)
	event.create('flash_drive').texture("kubejs:item/boot_medium").displayName('フラッシュドライブ').maxDamage(512)

	event.create('alchemical_laser').parentModel("kubejs:block/ponder_laser_lamp_on").displayName('アルケミカルレーザー（反射用）').unstackable()
	event.create('thermal_cast').texture("kubejs:item/thermal_cast").displayName('熱鋳造鋳型').unstackable()
	event.create('three_cast').texture("kubejs:item/three_cast").displayName('フィギュアの鋳型(3)').unstackable()
	event.create('eight_cast').texture("kubejs:item/eight_cast").displayName('桁の鋳型 (8)').unstackable()
	event.create('plus_cast').texture("kubejs:item/plus_cast").displayName('鋳造オペレーター (+)').unstackable()
	event.create('minus_cast').texture("kubejs:item/minus_cast").displayName('鋳造オペレーター金型 (-)').unstackable()
	event.create('multiply_cast').texture("kubejs:item/multiply_cast").displayName('演算子(x)の鋳型').unstackable()
	event.create('divide_cast').texture("kubejs:item/divide_cast").displayName('鋳造オペレーター').unstackable()
	event.create('computation_matrix').parentModel("kubejs:item/computation_matrix").displayName('計算マトリックス').rarity(RARITY_UNCOMMON).unstackable()
})

onEvent('block.registry', event => {
	event.create('enderium_casing').model('kubejs:block/enderium_casing').material('metal').hardness(4.0).displayName('エンダー・ハル')
	event.create('zinc_casing').material('metal').hardness(3.0).displayName('亜鉛ケース')
	event.create('invar_casing').material('metal').hardness(3.0).displayName('インバーケース')
	event.create('fluix_casing').material('metal').hardness(3.0).displayName('ストリーミング・エンクロージャー')

	event.create('ponder_laser_lamp').model('kubejs:block/ponder_laser_lamp').notSolid().renderType("translucent").displayName('レーザーランプ（反射用）')
	event.create('ponder_laser_lamp_on').model('kubejs:block/ponder_laser_lamp_on').notSolid().lightLevel(15).renderType("translucent").displayName('レーザーランプ（反射用）')

	let machine = (name, layer, dname) => {
		let id = name.toLowerCase()
		event.create(id + '_machine')
			.model('kubejs:block/' + id + '_machine')
			.material('lantern')
			.hardness(3.0)
			.displayName(dname + '機械')
			.notSolid()
			.renderType(layer)
	}

	machine('Andesite', "solid", '安山岩')
	machine('Brass', "translucent", '真鍮')
	machine('Copper', "cutout", '銅')
	machine('Zinc', "cutout", '亜鉛')
	machine('Enderium', "cutout", 'エンダリウム')

	for (i = 0; i < 15; i++)
		event.create(`failed_alchemy_${i}`)
			.material('glass')
			.color(0, 0x394867)
			.color(1, 0x14274E)
			.hardness(0.1)
			.box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
			.model("kubejs:block/mundane_substrate")
			.displayName(`汚染された錬金術の混合物`)
			.renderType("cutout")

	global.substrates = []
	global.substrate_mapping = {}
	var current_category = []
	var category_index = 0
	var substrate_index = 0

	let category = () => {
		global.substrates.push(current_category)
		current_category = []
		category_index++
		substrate_index = 0
	}

	let substrate_base = (c1, c2, id, name, model, ingredient, outputItem) => {
		global.substrate_mapping[id] = {
			category: category_index,
			index: substrate_index,
			name: name.replace(" Reagent", "").replace(" Catalyst", "")
		}
		current_category.push({
			id: `kubejs:substrate_${id}`,
			ingredient: ingredient,
			outputItem: outputItem
		})
		event.create(`substrate_${id}`)
			.material('glass')
			.color(0, c1)
			.color(1, c2)
			.hardness(0.1)
			.box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
			.model("kubejs:block/" + model)
			.displayName(name)
			.renderType("cutout")
			.item(e => e.rarity(model == "catalyst" ? RARITY_UNCOMMON : RARITY_COMMON))
		substrate_index++
	}

	let reagent = (c1, c2, id, prefix, ingredient, outputItem) => substrate_base(c1, c2, id, `${prefix}試薬`, "substrate", ingredient, outputItem)
	let catalyst = (c1, c2, id, prefix, ingredient) => substrate_base(c1, c2, id, `${prefix}触媒`, "catalyst", ingredient)

	reagent(0x5F5F5F, 0x8E8E8E, "andesite", "安山岩", "create:andesite_cobblestone")
	reagent(0x7F7F7F, 0xD4D4D4, "diorite", "せんりょくせき", "create:diorite_cobblestone")
	reagent(0x563A2F, 0x9A6C5B, "granite", "御影石", "create:granite_cobblestone")
	reagent(0x585858, 0x646363, "cobblestone", "ストーン", "minecraft:cobblestone")
	reagent(0x32333D, 0x5C5C5C, "basalt", "バサルト", "minecraft:basalt")
	reagent(0x6B5D4F, 0x7D6B5A, "gabbro", "斑レイ岩", "create:gabbro_cobblestone")
	category()
	reagent(0xD30000, 0xB80F0A, "red", "スカーレット", ["minecraft:rose_bush", "minecraft:poppy", "minecraft:red_tulip"], "minecraft:red_dye")
	reagent(0xFC6600, 0xb1560f, "orange", "オレンジ", ["minecraft:orange_tulip", "biomesoplenty:burning_blossom", "minecraft:pumpkin"], "minecraft:orange_dye")
	reagent(0xFFF200, 0xdba520, "yellow", "イエロー", ["biomesoplenty:goldenrod", "minecraft:sunflower", "minecraft:dandelion"], "minecraft:yellow_dye")
	reagent(0x9dc183, 0x708238, "green", "グリーン", ["minecraft:fern", "minecraft:cactus", "biomesoplenty:watergrass"], "minecraft:green_dye")
	reagent(0x57a0d2, 0x0080fe, "blue", "ブルー", ["biomesoplenty:blue_hydrangea", "minecraft:cornflower", "minecraft:blue_orchid"], "minecraft:light_blue_dye")
	reagent(0xb200ed, 0xff66cc, "magenta", "マゼンタ", ["minecraft:lilac", "minecraft:allium", "minecraft:pink_tulip"], "minecraft:magenta_dye")
	category()
	reagent(0xAC3B00, 0xD5AC26, "blaze", "スプラッシー", "minecraft:blaze_powder")
	reagent(0x4F7E48, 0x8AD480, "slime", "ぬるぬる", "minecraft:slime_ball")
	reagent(0x5B151A, 0xBC3E49, "nether", "インファナル", "minecraft:nether_wart")
	reagent(0x05030A, 0x36234C, "obsidian", "黒曜石", "create:powdered_obsidian")
	reagent(0x535353, 0x717171, "gunpowder", "火薬", "minecraft:gunpowder")
	reagent(0x529680, 0xA2CFC0, "prismarine", "アクアティック", "minecraft:prismarine_shard")
	category()
	reagent(0x9E72BE, 0xB7C9D1, "arcane", "神秘的", "forbidden_arcanus:arcane_crystal_dust")
	reagent(0x27A9BB, 0x2CC7C9, "apatite", "アパタイト", "thermal:apatite_dust")
	reagent(0xC7A94A, 0xEEF071, "sulfur", "亜硫酸", "thermal:sulfur_dust")
	reagent(0x735A65, 0xB8AFAF, "niter", "セリトロヴィー", "thermal:niter_dust")
	reagent(0x91C5FC, 0xA7CBCF, "certus", "トゥルークォーツ", "appliedenergistics2:certus_quartz_dust")
	reagent(0xB19E8F, 0xE7E2DB, "quartz", "クォーツ", "appliedenergistics2:nether_quartz_dust")
	category()
	reagent(0x616A60, 0xD0D2C5, "zinc", "亜鉛", "kubejs:zinc_dust")
	reagent(0xDD7E5D, 0xFCEFBA, "copper", "銅", "thermal:copper_dust")
	reagent(0xA6A6A6, 0xD5D5D5, "iron", "鉄", "thermal:iron_dust")
	reagent(0x977756, 0xE4D196, "nickel", "ニッケル", "thermal:nickel_dust")
	reagent(0x232456, 0x7C95A4, "lead", "リード", "thermal:lead_dust")
	reagent(0xD99413, 0xFAF25E, "gold", "ゴールド", "thermal:gold_dust")
	category()
	reagent(0xFC7781, 0xFCCED0, "cinnabar", "朱色", "thermal:cinnabar")
	reagent(0x335DC1, 0x7395E7, "lapis", "ラピスラズリ", "thermal:lapis_dust")
	reagent(0x246BE9, 0x76C6FC, "sapphire", "サファイア", "thermal:sapphire_dust")
	reagent(0x00A82B, 0xADFACB, "emerald", "エメラルド", "thermal:emerald_dust")
	reagent(0x9D0A33, 0xFB7B71, "ruby", "ルビー", "thermal:ruby_dust")
	reagent(0x20C3B3, 0xD2FCF3, "diamond", "ダイヤモンド", "thermal:diamond_dust")
	category()
	catalyst(0x506D84, 0x889EAF, "igneous", "マグマティック")
	catalyst(0xB5CDA3, 0xC9E4C5, "herbal", "ハーブ")
	catalyst(0x9F5F80, 0xFF8474, "volatile", "不安定")
	catalyst(0xFFB037, 0xFFE268, "crystal", "結晶性")
	catalyst(0x232457, 0x7D97A6, "metal", "冶金")
	catalyst(0x3EDBF0, 0xC0FEFC, "gem", "ジェムカラー")
	category()

	event.create(`substrate_chaos`)
		.material('glass')
		.color(0, 0xb200ed)
		.color(1, 0xff66cc)
		.hardness(0.1)
		.box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
		.model("kubejs:block/chaos_catalyst")
		.displayName("カオス・カタリスト")
		.renderType("cutout")
		.item(e => e.rarity(RARITY_RARE))

	event.create(`substrate_silicon`)
		.material('glass')
		.color(0, 0x474449)
		.color(1, 0x967DA0)
		.hardness(0.1)
		.box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
		.model("kubejs:block/substrate")
		.displayName("シリコン試薬")
		.renderType("cutout")
		.item(e => e.rarity(RARITY_EPIC))


	event.create(`substrate_silver`)
		.material('glass')
		.color(0, 0x9FADB4)
		.color(1, 0xBECCD2)
		.hardness(0.1)
		.box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
		.model("kubejs:block/substrate")
		.displayName("銀試薬")
		.renderType("cutout")

	event.create(`accellerator_glowstone`)
		.material('glass')
		.color(0, 0xFFBC5E)
		.hardness(0.1)
		.box(.125, 0, .125, .875, 10.0 / 16.0, .875, false)
		.model("kubejs:block/accellerator")
		.displayName("グラストーン・アクセラレーター")
		.renderType("cutout")

	event.create(`accellerator_redstone`)
		.material('glass')
		.color(0, 0xAA0F01)
		.hardness(0.1)
		.box(.125, 0, .125, .875, 10.0 / 16.0, .875, false)
		.model("kubejs:block/accellerator")
		.displayName("レッドストーン・アクセラレーター")
		.renderType("cutout")

})

onEvent('fluid.registry', event => {
	let colors = [0xCBE827, 0xAEE827, 0x68E827, 0x27E86E, 0x27E8B1, 0x27DEE8, 0x27B5E8, 0x2798E8, 0x2778E8, 0x2748E8]
	event.create('raw_logic').displayName(`リキッドロジック（未加工）`).textureStill('kubejs:fluid/number_still').textureFlowing('kubejs:fluid/number_flow').color(0xE7FFCB)
	for (i = 0; i < 10; i++)
		event.create('number_' + i).displayName(`リキッドロジック (${i})`).textureStill('kubejs:fluid/number_still').textureFlowing('kubejs:fluid/number_flow').color(colors[i])
	event.create('matrix').displayName(`液体計算マトリックス`).textureStill('kubejs:fluid/matrix_still').textureFlowing('kubejs:fluid/matrix_flow').bucketColor(colors[0])
	event.create('fine_sand').displayName(`細かい砂`).textureStill('kubejs:fluid/fine_sand_still').textureFlowing('kubejs:fluid/fine_sand_flow').bucketColor(0xE3DBB0)
	event.create('crude_oil').displayName(`原油`).textureStill('thermal:block/fluids/crude_oil_still').textureFlowing('thermal:block/fluids/crude_oil_flow').bucketColor(0x222118)
	event.create('liquid_smoke').displayName(`液体スモーク`).textureStill('advancedrocketry:blocks/fluid/oxygen_still').textureFlowing('advancedrocketry:blocks/fluid/oxygen_flow').bucketColor(0xEBEBEB)
})

onEvent('item.modification', event => {
	let colors = ["red", "yellow", "green", "blue", "magenta", "black"]
	colors.forEach(element => {
		event.modify('appliedenergistics2:' + element + '_paint_ball', item => {
			item.maxStackSize = 1
		})
	});
})
