// priority: 0

onEvent('jei.hide.items', event => {
	event.hide('appliedenergistics2:facade')
	event.hide(`#buddycards:cards`)
	event.hide(`#buddycards:gummy_cards`)
})

onEvent('jei.subtypes', event => {
	event.useNBT('advancedrocketry:planet_id_chip')
})

onEvent('jei.hide.fluids', event => {
})

onEvent('jei.add.items', event => {
	event.add('thermal:ruby')
	event.add('thermal:ruby_dust')
	event.add('thermal:ruby_ore')
	event.add('thermal:apatite_ore')
	event.add('thermal:sapphire')
	event.add('thermal:sapphire_dust')
	event.add('thermal:sapphire_ore')

	event.add(Item.of("advancedrocketry:planet_id_chip", { dimId: "custommoon:moon", DimensionName: " The Moon " }))
	event.add(Item.of("advancedrocketry:planet_id_chip", { dimId: "minecraft:overworld", DimensionName: " Earth " }))

})

onEvent('jei.remove.categories', event => {
	event.yeetIf(element => {
		let name = (element.getUid() + "")
		return name.startsWith('advancedrocketry:') || name.startsWith("thermal:centrifuge")
	});
})

onEvent('item.tooltip', tooltip => {
	let holds = (id, slots) => tooltip.add("metalbarrels:" + id + "_barrel", [`§7${slots} スロット`])
	let main_assembly = (id, stage) => tooltip.add(id, [`§7基本組立：${stage == "4" ? "§6最終" : "§6第" + stage}`, '§8自動化について考える',  'この項目の制作の§8'])
	let bonus_assembly = (id, stage) => tooltip.add(id, [`§7ボーナス・アセンブリー：§6第${stage}`])
	let not_consumed = (id, stage) => tooltip.add(id, [`§7組み立て過程で消費されない`])
	let ore = (id, y1, y2) => tooltip.add(id, [`§o§7高度§6${y1} §7から§6${y2}`])

	tooltip.add("minecraft:redstone_ore", [`§7ワールド内で生成されない。レッドストーンを得るには辰砂を粉砕する必要がある。`]);

	ore("forbidden_arcanus:arcane_crystal_ore", 1, 9)
	ore("appliedenergistics2:charged_quartz_ore", 1, 30)
	ore("forbidden_arcanus:xpetrified_ore", 1, 30)
	ore("appliedenergistics2:quartz_ore", 1, 30)
	ore("thermal:apatite_ore", 1, 30)
	ore("thermal:cinnabar_ore", 1, 30)
	ore("thermal:niter_ore", 1, 30)
	ore("thermal:nickel_ore", 1, 40)
	ore("thermal:ruby_ore", 1, 30)
	ore("thermal:sapphire_ore", 1, 30)
	ore("thermal:lead_ore", 1, 20)
	ore("minecraft:emerald_ore", 1, 30)
	ore("thermal:sulfur_ore", 12, 36)
	ore("create:zinc_ore", 15, 70)
	ore("create:copper_ore", 40, 85)

	ore("minecraft:coal_ore", 1, 128)
	ore("minecraft:iron_ore", 1, 64)
	ore("minecraft:lapis_ore", 1, 32)
	ore("minecraft:gold_ore", 1, 32)
	ore("minecraft:diamond_ore", 1, 16)

	tooltip.add("advancedrocketry:planet_id_chip", [`§3使い方：`, `1. §7クラフトレシピを使って作成する`, `2. §7ロケットのインターフェースを開く`, `3. §7表示されるガイダンスコンピュータをクリックする`, `4. §7空きスロットにチップを挿入する`, "§8§o(惑星選択メニューを使用するとクラッシュします)"]);

	holds('copper', 5 * 9)
	holds('iron', 6 * 9)
	holds('silver', 8 * 9)
	holds('gold', 9 * 9)

	main_assembly('kubejs:kinetic_mechanism', "1")
	bonus_assembly('kubejs:sealed_mechanism', "1A")
	main_assembly('create:precision_mechanism', "2")
	bonus_assembly('kubejs:infernal_mechanism', "2A")
	main_assembly('kubejs:inductive_mechanism', "3")
	bonus_assembly('kubejs:abstruse_mechanism', "3A")
	main_assembly('kubejs:calculation_mechanism', "4")

	not_consumed('cb_microblock:stone_saw')
	not_consumed('cb_microblock:iron_saw')
	not_consumed('cb_microblock:diamond_saw')
	not_consumed('projectred-core:screwdriver')
	// not_consumed('create:super_glue')
	not_consumed('kubejs:chromatic_resonator')
	not_consumed('kubejs:flash_drive')
	// not_consumed('xreliquary:mercy_cross')
	// not_consumed('xreliquary:ender_staff')

	global.substrates[0].forEach(e => tooltip.add(e.id, [`§8カテゴリー: §7マグマティック`]));
	global.substrates[1].forEach(e => tooltip.add(e.id, [`§8カテゴリー: §7 ハーブ`]));
	global.substrates[2].forEach(e => tooltip.add(e.id, [`§8カテゴリー: §7Unstable`]));
	global.substrates[3].forEach(e => tooltip.add(e.id, [`§8カテゴリー: §7クリスタル`]));
	global.substrates[4].forEach(e => tooltip.add(e.id, [`§8カテゴリー: §7冶金学`]));
	global.substrates[5].forEach(e => tooltip.add(e.id, [`§8カテゴリー: §7セルフカラー`]));
	global.substrates[6].forEach(e => tooltip.add(e.id, [`§8カテゴリー: §7触媒`]));

	tooltip.add("structurescompass:structures_compass", [`§7右クリックで起動`]);

	tooltip.add("kubejs:accellerator_redstone", ["§7錬金術研究で使用する際：", "  §6正しい§6試薬の一つ",
		"  §間違った§6枠にお金が使われることはない。"]);
	tooltip.add("kubejs:accellerator_glowstone", ["§7錬金術研究で使用する際：", "  §6正しい§6試薬の一つ",
		"  §正しい§6スロットの§6は使われない。"]);
		tooltip.add("magicfeather:magicfeather", [`§6クリエイティブ飛行を付与`]);

	tooltip.add("xreliquary:alkahestry_tome", [`§6機械式クラフトでは使用不可`]);

	tooltip.add("pipez:energy_pipe", [`§7Connections may have to be`, `§7marked as §fInputs §7by sneak-clicking`, `§7the connection with a §fWrench`]);

	for (i = 0; i < 15; i++)
		tooltip.add(`kubejs:failed_alchemy_${i}`, [
			`§7分析のため遠心分離器に投入してください。`,
			"",
			"§6得られるもの：",
			"- 灰 §7 不正確な各成分について",
			"- レッドストーン §7",
			"   間違ったスロットに§7",
			"- それぞれの正しい成分について§7を糊塗する。",
			"   右スロットに§7"
		])
})

onEvent('jei.information', event => {
	// event.add('thermal:blitz_rod', ["Obtain by running a §9Charged Staff§0 (with Charge) and any amount of §9Tiny Smoke Clouds§0 through an §5Alchemical Laser§0."])
	event.add('thermal:blizz_rod', ["9エントロピー・マニピュレーター§0(チャージ済み)と任意の数の§9スノー ボール§0を§5アルケミカル・レーザー§0に通すと得られる。"])
	event.add('thermal:basalz_rod', ["9フラックスマグネット§0（帯電）と任意の量の§9バサルト§0を§5アルケミカルレーザー§0に通すと得られる。"])
	event.add('kubejs:substrate_silicon', ["9カオス触媒§0と任意の量の§9試薬§0を§5アルケミカルレーザー§0に通すと得られる。", " ", "問題の試薬§9は、世界から世界へ§0変化する。"])

	event.add('kubejs:alchemical_laser', ["このアイテムは§5アルケミカルレーザー§0を表しています。このアイテムの§9Sight§0(wキーを押す)を使って、どのように作られるかを知る。"])

	let catalyst = (name, me) =>
		[
			`つの§9の正しい組み合わせ§0を見つけることによって得られる。${me ? name : name + "§0試薬"}使用§0、§5アルケミカルレーザー§0。`, " ",
			`§ファンネル・ワゴンの最初の 4 つのスロットに、4 つの§9 ファンネル・ワゴンを置く。${me ? name : name + "§0試薬"}§0`,
			`§82.§0内容に§5アルケミカルレーザー§0を当て、§9触媒§0、または§9ヒント§0を正しい組合せにする。`, " ",
			"§8PS:§0正しい組み合わせは§9重複§0を持つことができる。",
			"§8PS:§0 世界によって§9の正しい組み合わせは異なる§0",
			"§8オプション：§0 第五スロットに§9レッドストーンアクセラレータ§0か§9グロウストーンアクセラレータ§0を置くと、§9追加ヒント§0が得られる。",
		]

	event.add('kubejs:substrate_igneous', catalyst("マグマティック"))
	event.add('kubejs:substrate_herbal', catalyst("ハーブ"))
	event.add('kubejs:substrate_volatile', catalyst("不安定"))
	event.add('kubejs:substrate_crystal', catalyst("クリスタル"))
	event.add('kubejs:substrate_metal', catalyst("冶金"))
	event.add('kubejs:substrate_gem', catalyst("ジェムカラー"))

	let beer = (id, igs) =>
		event.add('drinkbeer:beer_mug' + id, ["空のビールジョッキを4つ並べる、" + igs + "を樽に入れ、このドリンクを作った。"])

	beer("", "小麦3粒とバケツの水")
	beer("_blaze_stout", "小麦2、火薬1、バケツの水")
	beer("_blaze_milk_stout", "小麦1、砂糖1、火薬1、バケツの水") //wtf are these drinks
	beer("_apple_lambic", "小麦2粒、リンゴ1個、バケツの水。")
	beer("_sweet_berry_kriek", "小麦2、スイートベリー1、バケツの水")
	beer("_haars_icey_pale_lager", "小麦3個と青い氷の塊。")
	beer("_pumpkin_kvass", "パン2斤、カボチャ1個、バケツの水。")

	event.add('kubejs:substrate_chaos', catalyst("触媒", "Chaos Catalyst").concat([
		" ", "§8使用§0", "9カオス触媒§0と任意の量の§9試薬§0を積んだワゴンを、§5アルケミ カルレーザー§0を通して転がすと、ある試薬から別の試薬への§9転位§0 が起こる。転移のペアはワールド§0ごとに§9固有である。"
	]))
})