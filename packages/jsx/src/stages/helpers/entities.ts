// Entities copied from `xsl/entities.ent`
// Info extracted via:
// `file contents...`.split("\n").filter(x => x.match(/-LIKE/)).filter(x=>x.match("ENTITY"))
// x.map(a => [a.match(/ENTITY (\w+-\w+) "(.*)"/)[1], a.match(/ENTITY (\w+-\w+) "(.*)"/)[2]]).map(([a,b])=>  `export const ${a.replace("-", "_")} = "${b}".split("|")`).join("\n")

export const DEFINITION_LIKE = "definition".split("|");
export const THEOREM_LIKE =
    "theorem|corollary|lemma|algorithm|proposition|claim|fact|identity".split(
        "|"
    );
export const PROOF_LIKE =
    "proof|argument|justification|reasoning|explanation".split("|");
export const AXIOM_LIKE =
    "axiom|conjecture|principle|heuristic|hypothesis|assumption".split("|");
export const REMARK_LIKE =
    "remark|convention|note|observation|warning|insight".split("|");
export const COMPUTATION_LIKE = "computation|technology|data".split("|");
export const ASIDE_LIKE = "aside|biographical|historical".split("|");
export const EXAMPLE_LIKE = "example|question|problem".split("|");
export const PROJECT_LIKE = "project|activity|exploration|investigation".split(
    "|"
);
export const GOAL_LIKE = "objectives|outcomes".split("|");
export const OPENPROBLEM_LIKE = "openproblem|openquestion|openconjecture".split(
    "|"
);
export const FIGURE_LIKE = "figure|table|listing|list".split("|");
export const SOLUTION_LIKE = "hint|answer|solution".split("|");
export const DISCUSSION_LIKE =
    "context|discussion|opinion|status|suggestion".split("|");
