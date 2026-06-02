"use client";

import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

const defense = {
    reciprocity: {
        en: "Ask who benefits from your attention before acting on any \"free\" information. Free research with no visible business model is not free — you are the product.",
        zh: "问自己：谁能从你的行动中获益？没有明显商业模式的免费信息不是免费的——你才是产品。",
    },
    commitment: {
        en: "Make investment decisions privately before sharing them publicly. Treat a changed thesis as new information, not personal failure. Set a pre-defined exit criteria before entering any trade.",
        zh: "在公开之前私下做好决策。把改变立场视为新信息，而非个人失败。每笔交易前设定预定的退出标准。",
    },
    socialProof: {
        en: "Distinguish between popularity and validity. A trending stock is evidence of attention, not of value. Ask: does the crowd have better information, or just more people?",
        zh: "区分流行与正确。一只热门股票是注意力的证明，不是价值的证明。问自己：这群人是有更好的信息，还是只是人数更多？",
    },
    liking: {
        en: "Separate your opinion of the messenger from the message. Before acting on a recommendation, ask: would I find this idea compelling if it came from someone I found less likable?",
        zh: "把你对信使的看法和信息本身分开。在采取行动之前问：如果这个建议来自我不那么喜欢的人，我还会觉得它有说服力吗？",
    },
    authority: {
        en: "Ask for the track record, not just the title. Authority symbols (titles, clothing, institutional badges) are cheap to imitate. Look for audited returns, not curated screenshots.",
        zh: "要求看记录，而不仅仅是头衔。权威符号（头衔、着装、机构标识）容易模仿。寻找经过审计的回报，而不是精心挑选的截图。",
    },
    scarcity: {
        en: "Genuine opportunity does not vanish in 24 hours. When urgency is the primary argument for a decision, treat it as a red flag, not a catalyst.",
        zh: "真正的机会不会在24小时内消失。当紧迫感是决策的主要理由时，把它当作警示信号，而不是催化剂。",
    },
};

function DefenseBox({ text }: { text: string }) {
    return (
        <div className="bg-black/[0.03] border border-black/[0.08] rounded-xl p-5 text-sm">
            <p>{text}</p>
        </div>
    );
}

export default function InfluenceRetailInvestorPost() {
    const { lang } = useLang();
    const zh = lang === 'zh';

    return (
        <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="mb-12">
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#aaa] mb-6">
                        {zh ? '行为金融' : 'Behavioral Finance'} · 2026-05-20 · 12 min read
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-serif font-bold leading-tight text-black">
                        {zh ? '六把瞄准你账户的枪' : 'The Six Weapons Aimed at Your Portfolio'}
                    </h1>
                    <p className="text-[#888] text-lg mt-3">
                        {zh ? '散户投资者的影响力心理学' : 'The Psychology of Influence for Retail Investors'}
                    </p>
                </div>

                {/* Content */}
                <article className="space-y-10 text-[#444] leading-relaxed">

                    {/* Intro */}
                    <section className="space-y-4">
                        {zh ? (
                            <>
                                <p className="text-lg text-black/80">
                                    罗伯特·西奥迪尼花了数十年研究人类是如何被说服的。他的经典著作《影响力》将顺从行为背后的机制提炼为六大原理。他或许没有预料到的是，这六大原理与散户投资者的心理竟然有如此精准的映射——那个坐在家里、盯着股价、刷着推文、试图跑赢市场的普通人。
                                </p>
                                <p>
                                    这篇文章将逐一拆解每条原理，揭示它们在市场中的具体表现，并给出防御策略。把它当作一本田野指南——关于那些你尚未察觉、却已悄悄作用于你账户的操控。
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="text-lg text-black/80">
                                    Robert Cialdini spent decades studying how people are persuaded. His landmark book <em>Influence</em> distilled the mechanics of compliance into six universal principles. What he may not have anticipated is how devastatingly well those same principles map onto the psychology of the retail investor — the individual sitting at home, watching tickers, reading Twitter threads, and trying to beat the market.
                                </p>
                                <p>
                                    This post walks through each principle, shows how it manifests in markets, and offers a defense. Think of it as a field guide to the manipulation you didn&apos;t know was already happening to your portfolio.
                                </p>
                            </>
                        )}
                    </section>

                    <hr className="border-black/[0.08]" />

                    {/* 1. Reciprocity */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-black">
                            {zh
                                ? '1. 互惠 — 那份"免费"研报，代价高昂'
                                : '1. Reciprocity — The "Free" Research That Costs a Fortune'}
                        </h2>
                        {zh ? (
                            <>
                                <p>互惠原理告诉我们：当有人给予我们某样东西——哪怕是主动送上门的——我们就会感到必须回报。在散户投资中，这以一种极具现代感的形式出现：免费的小道消息、免费的报告、免费的 Discord 内部信号。</p>
                                <p>一个金融博主分享了一份关于某小盘股的详细论据。内容翔实、排版精美，看起来像是出于慷慨。随之而来的是<strong>不对等的交换</strong>：你买入，为分发这份"礼物"的人提供了流动性。这就是拉盘。你的资本，就是那份互惠的让步。</p>
                                <p>西奥迪尼指出，<strong>主动送上门的好处是最强烈的互惠触发器</strong>——恰恰因为接受者没有主动索取，反而感受到更深的亏欠。那份不请自来的荐股，正是教科书式的应用。</p>
                            </>
                        ) : (
                            <>
                                <p>The reciprocity principle says that when someone gives us something — even unsolicited — we feel compelled to give something back. In retail investing, this plays out in a peculiarly modern form: the free tip, the free report, the free Discord alpha call.</p>
                                <p>A financial influencer shares a detailed thesis on a small-cap stock. It&apos;s thorough, it&apos;s well-formatted, it feels like generosity. What follows is the <strong>unequal exchange</strong>: you buy in, providing liquidity to whoever distributed that &quot;gift.&quot; This is the pump. The reciprocal concession is your capital.</p>
                                <p>Cialdini notes that <strong>uninvited favors are the most powerful triggers of reciprocity</strong> — precisely because the recipient didn&apos;t ask for them and therefore feels the debt more acutely. The unsolicited stock tip is a textbook application.</p>
                            </>
                        )}
                        <DefenseBox text={zh ? defense.reciprocity.zh : defense.reciprocity.en} />
                    </section>

                    <hr className="border-black/[0.08]" />

                    {/* 2. Commitment & Consistency */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-black">
                            {zh
                                ? '2. 承诺与一致性 — 为什么你无法承认自己错了'
                                : '2. Commitment & Consistency — Why You Can\'t Admit You Were Wrong'}
                        </h2>
                        {zh ? (
                            <>
                                <p>一旦我们做出承诺——尤其是公开承诺——我们就会不惜一切代价保持与之一致，哪怕反对的证据已经堆积如山。在投资中，这几乎是每一次灾难性死扛背后的核心机制。</p>
                                <p>你在 Reddit 上发帖："重仓 $XYZ，这玩意儿要涨到 500 美元。"股价跌了 30%。你没有止损，反而越跌越买，写出更长的帖子为论点辩护，拉黑批评者。你的<strong>行为强化了自己的承诺</strong>。这不是固执，而是对公开承诺在认知层面的正常反应。</p>
                                <p><strong>低球策略</strong>在金融产品中尤为阴险：你以优惠条件同意了一笔投资，然后条件悄悄发生了变化（费用出现，初始利率到期）。因为你已经做出承诺，你会主动寻找理由证明最初的决定是正确的。</p>
                            </>
                        ) : (
                            <>
                                <p>Once we make a commitment — especially a public one — we will go to extraordinary lengths to remain consistent with it, even as evidence mounts against our position. In investing, this is the engine behind almost every catastrophic bag-hold.</p>
                                <p>You post on Reddit: &quot;Loading up $XYZ, this thing is going to $500.&quot; The stock drops 30%. Instead of cutting the loss, you average down, you write longer threads defending the thesis, you block critics. Your <strong>behavior reinforces your own commitment</strong>. This is not stubbornness — it is a cognitively normal response to a public pledge.</p>
                                <p>The <strong>low-ball technique</strong> is particularly insidious in financial products: you agree to an investment on favorable terms, and then the terms quietly change (fees emerge, the initial rate expires). Because you&apos;ve already committed, you search for reasons the original decision was right anyway.</p>
                            </>
                        )}
                        <DefenseBox text={zh ? defense.commitment.zh : defense.commitment.en} />
                    </section>

                    <hr className="border-black/[0.08]" />

                    {/* 3. Social Proof */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-black">
                            {zh
                                ? '3. 社会认同 — 人人都在买，那肯定是对的'
                                : '3. Social Proof — If Everyone Is Buying, It Must Be Right'}
                        </h2>
                        {zh ? (
                            <>
                                <p>社会认同在两种条件下最为强烈，西奥迪尼如此指出：<strong>不确定性</strong>与<strong>相似性</strong>。而市场，恰好是这两者的绝佳温床。</p>
                                <p>当一只股票暴涨而你不知道原因时，不确定性达到顶峰。你开始观察他人——尤其是与你相似的人（相似性）。一个散户看到某个看多帖子有 5 万个赞，看到其他散户也在买入，于是把群体行为解读为证据。这是大规模的<strong>多元无知</strong>：人人都不确定，人人都在观察别人，集体的不确定行动被误读为集体的确信。</p>
                                <p>2021 年的模因股现象，正是社会认同机制在前所未有的速度下运行的纯粹示范，而社交媒体算法专门推送已有互动的内容，进一步放大了这一效应。</p>
                            </>
                        ) : (
                            <>
                                <p>Social proof is most powerful under two conditions Cialdini identifies: <strong>uncertainty</strong> and <strong>similarity</strong>. Markets are the ideal environment for both.</p>
                                <p>When a stock surges and you have no information about why, uncertainty is at its peak. You look to others — specifically, to people like you (similarity). A retail trader sees 50,000 Reddit upvotes on a bullish post, notices other retail traders buying in, and interprets crowd behavior as evidence. This is <strong>pluralistic ignorance</strong> at scale: everyone is uncertain, everyone is watching everyone else, and the collective action of uncertainty gets misread as collective conviction.</p>
                                <p>The meme stock phenomenon of 2021 was a pure demonstration of social proof mechanics operating at unprecedented velocity, amplified by social media algorithms designed to surface content that already has engagement.</p>
                            </>
                        )}
                        <DefenseBox text={zh ? defense.socialProof.zh : defense.socialProof.en} />
                    </section>

                    <hr className="border-black/[0.08]" />

                    {/* 4. Liking */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-black">
                            {zh
                                ? '4. 喜好 — 你买的不是股票，你买的是讲故事的人'
                                : '4. Liking — You Don\'t Buy Stocks, You Buy Storytellers'}
                        </h2>
                        {zh ? (
                            <>
                                <p>我们更容易受到自己喜欢的人的影响。西奥迪尼列出了几个驱动因素：外表吸引力、相似性、赞美、反复接触带来的熟悉感，以及<strong>条件性联想</strong>。</p>
                                <p>那个穿得像你、说话像你、跟你分享对"体制"的不满、还夸你"做了自己的研究"很聪明的金融博主——这个人同时激活了所有的喜好开关。随后的荐股不会被当作推销接收，而是被当作来自可信朋友的建议。</p>
                                <p>条件性联想同样强大。与名人合影的基金经理。运动员代言的加密项目。与励志形象挂钩的品牌。这些联想会转移情感：对名人的正面感受渗透进你对资产的判断。</p>
                            </>
                        ) : (
                            <>
                                <p>We are more easily influenced by people we like. Cialdini identifies the drivers: physical attractiveness, similarity, compliments, familiarity from repeated contact, and <strong>conditioned association</strong>.</p>
                                <p>The financial influencer who dresses like you, speaks like you, shares your frustrations with &quot;the system,&quot; and compliments your intelligence for &quot;doing your own research&quot; — this person has activated every liking lever simultaneously. The stock recommendation that follows is not received as a pitch; it is received as advice from a trusted friend.</p>
                                <p>Conditioned association is equally powerful. A fund manager photographed with celebrities. A crypto project endorsed by athletes. A brand associated with aspirational imagery. These associations transfer affect: the positive feelings for the celebrity bleed into your assessment of the asset.</p>
                            </>
                        )}
                        <DefenseBox text={zh ? defense.liking.zh : defense.liking.en} />
                    </section>

                    <hr className="border-black/[0.08]" />

                    {/* 5. Authority */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-black">
                            {zh
                                ? '5. 权威 — 专业的危险慰藉'
                                : '5. Authority — The Dangerous Comfort of Expertise'}
                        </h2>
                        {zh ? (
                            <>
                                <p>权威是一种强大的捷径。在一个没有人能精通所有领域的世界里，听从有资质的权威往往是理性的。问题在于，正如西奥迪尼所警告的，<strong>盲目服从的诱惑</strong>——以及权威的符号（头衔、西装、机构背景）被伪造的便利性。</p>
                                <p>在金融领域：拥有 CFA 的分析师，来自知名银行的基金经理，毕业于知名大学经济学博士的通讯作者。这些信号会触发顺从，即便其历史记录缺失或糟糕。散户很少会问：这个人的预测准确率到底是多少？</p>
                                <p>社交媒体已经将权威的<em>表演</em>民主化了。一个精美的网站、自信的语气、精心筛选的过往"成功预测"，几乎可以零成本制造出专业外表。</p>
                            </>
                        ) : (
                            <>
                                <p>Authority is a powerful shortcut. In a world where no one can be expert in everything, deferring to credentialed authorities is often rational. The problem, as Cialdini warns, is the <strong>temptation of blind obedience</strong> — and the ease with which the symbols of authority (titles, suits, institutional affiliation) can be manufactured.</p>
                                <p>In finance: the analyst with the CFA designation, the fund manager from a prestigious bank, the newsletter author with an economics PhD from a recognizable university. These signals trigger deference even when the track record is absent or poor. The retail investor rarely asks: what is the actual predictive accuracy of this person&apos;s calls?</p>
                                <p>Social media has democratized the <em>performance</em> of authority. A polished website, confident tone, and cherry-picked past calls can manufacture the appearance of expertise at near-zero cost.</p>
                            </>
                        )}
                        <DefenseBox text={zh ? defense.authority.zh : defense.authority.en} />
                    </section>

                    <hr className="border-black/[0.08]" />

                    {/* 6. Scarcity */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-black">
                            {zh
                                ? '6. 稀缺 — 错失恐惧是被设计出来的'
                                : '6. Scarcity — The Fear of Missing Out Is Engineered'}
                        </h2>
                        {zh ? (
                            <>
                                <p>稀缺会触发逆反心理——一种保护那些看似受到威胁的自由的心理驱动。当某样东西变得更难获得，我们就越想要它。这不仅仅是贪婪，而是一种根深蒂固的损失厌恶反应。</p>
                                <p>在市场中，FOMO 是散户的常伴。"今晚优惠截止。""私人 Discord 仅剩 500 个名额。""预售在 6 小时后结束。"每一句话都是人为制造的稀缺触发器。竞争条件——其他买家争夺同一资产——进一步放大了这种效应，这也是为什么拍卖机制总是导致超额支付。</p>
                                <p>更深的讽刺在于，流动性市场中真正的稀缺极为罕见。股票的供应可以被创造出来。稀缺几乎始终是一种叙事，而逆反心理几乎始终是将财富从冲动者转移到耐心者的机制。</p>
                            </>
                        ) : (
                            <>
                                <p>Scarcity triggers reactance — the psychological drive to protect freedoms that appear threatened. When something becomes harder to obtain, we want it more. This is not merely greed; it is a deeply wired loss-aversion response.</p>
                                <p>In markets, FOMO is the retail investor&apos;s constant companion. &quot;This offer expires tonight.&quot; &quot;Only 500 spots in the private Discord.&quot; &quot;The presale ends in 6 hours.&quot; Every one of these is a manufactured scarcity trigger. The competition condition — other buyers competing for the same asset — amplifies the effect further, which is why auction dynamics consistently cause overpayment.</p>
                                <p>The deeper irony is that true scarcity in liquid markets is rare. Supply of shares can be created. The scarcity is almost always a narrative, and the reactance is almost always the mechanism that transfers wealth from the reactive to the patient.</p>
                            </>
                        )}
                        <DefenseBox text={zh ? defense.scarcity.zh : defense.scarcity.en} />
                    </section>

                    <hr className="border-black/[0.08]" />

                    {/* Conclusion */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-serif font-bold text-black">
                            {zh ? '自动化时代：单一信号，单一决策' : 'The Automated Age: One Signal, One Decision'}
                        </h2>
                        {zh ? (
                            <>
                                <p>西奥迪尼在《影响力》的结尾有一段发人深省的观察：在一个极度复杂的世界里，单一线索的自动反应并非弱点，而是一种必要的适应。我们无法对每个决策进行穷尽式分析，心理捷径值得尊重。</p>
                                <p>但同样的必要性也制造了脆弱性。对捷径的合理使用与对捷径的操控，从内部看起来完全一样。在95%的情况下正确导航的捷径，恰恰成为专门设计来滥用它的那5%的攻击面。</p>
                                <p>散户投资者的任务不是消除启发式思维，而是识别那些支撑启发式判断的证据是否是伪造的。在每一个关键时刻，需要问的问题不是"这感觉对吗？"，而是"是谁制造了这种感觉？"</p>
                            </>
                        ) : (
                            <>
                                <p>Cialdini ends <em>Influence</em> with a sobering observation: in a world of overwhelming complexity, single-cue automatic responses are not a sign of weakness — they are a <em>necessary adaptation</em>. We cannot exhaustively analyze every decision. Mental shortcuts deserve respect.</p>
                                <p>But that same necessity creates the vulnerability. The legitimate use of a heuristic and its exploitation look identical from the inside. The shortcut that correctly routes 95% of decisions becomes the attack surface for the 5% that are designed to abuse it.</p>
                                <p>The retail investor&apos;s task is not to eliminate heuristics — it is to <strong>recognize when the evidence for a heuristic may be fabricated</strong>. The question to ask at every inflection point is not &quot;does this feel right?&quot; but &quot;who constructed the feeling?&quot;</p>
                            </>
                        )}
                    </section>

                    <hr className="border-black/[0.08]" />

                    {/* Summary Table */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-serif font-bold text-black">
                            {zh ? '速查表' : 'Quick Reference'}
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-black/[0.08] text-[#aaa] font-mono text-xs uppercase">
                                        <th className="py-3 pr-4">{zh ? '原理' : 'Principle'}</th>
                                        <th className="py-3 pr-4">{zh ? '市场触发' : 'Market Trigger'}</th>
                                        <th className="py-3">{zh ? '防御' : 'Defense'}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/[0.05] text-[#555]">
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-black">{zh ? '互惠' : 'Reciprocity'}</td>
                                        <td className="py-3 pr-4">{zh ? '免费小道消息、研报' : 'Free tips, free reports'}</td>
                                        <td className="py-3">{zh ? '问谁受益' : 'Ask who benefits'}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-black">{zh ? '承诺' : 'Commitment'}</td>
                                        <td className="py-3 pr-4">{zh ? '公开喊单、死扛' : 'Public calls, bag-holding'}</td>
                                        <td className="py-3">{zh ? '预设退出标准' : 'Pre-set exit criteria'}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-black">{zh ? '社会认同' : 'Social Proof'}</td>
                                        <td className="py-3 pr-4">{zh ? '模因股、病毒帖' : 'Meme stocks, viral posts'}</td>
                                        <td className="py-3">{zh ? '流行 ≠ 正确' : 'Popularity ≠ validity'}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-black">{zh ? '喜好' : 'Liking'}</td>
                                        <td className="py-3 pr-4">{zh ? '金融网红、名人背书' : 'Finfluencers, celebrities'}</td>
                                        <td className="py-3">{zh ? '人与观点分开' : 'Separate person from idea'}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-black">{zh ? '权威' : 'Authority'}</td>
                                        <td className="py-3 pr-4">{zh ? '资质、头衔' : 'Credentials, titles'}</td>
                                        <td className="py-3">{zh ? '要审计过的记录' : 'Demand audited track records'}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-black">{zh ? '稀缺' : 'Scarcity'}</td>
                                        <td className="py-3 pr-4">{zh ? 'FOMO、预售、截止期' : 'FOMO, presales, deadlines'}</td>
                                        <td className="py-3">{zh ? '紧迫感 = 警示' : 'Urgency = red flag'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                </article>

                {/* Back Link */}
                <div className="mt-12">
                    <Link href="/blog" className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#888] hover:text-black transition-colors">
                        {zh ? '← 返回' : '← Back'}
                    </Link>
                </div>

            </div>
        </main>
    );
}
