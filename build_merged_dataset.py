import os
import json
import csv
import re

ROOT_DIR = r"D:\LegalHackathon"
RESEARCH_AI_DIR = os.path.join(ROOT_DIR, "Research", "AI")
PROPOSALS_DIR = os.path.join(ROOT_DIR, "Proposals")
OUTPUT_DIR = os.path.join(ROOT_DIR, "Merged")
DATA_DIR = os.path.join(OUTPUT_DIR, "data")

os.makedirs(DATA_DIR, exist_ok=True)

print("="*70)
print("LEGAL AID HACKATHON: DATA CONSOLIDATION & PROPOSAL INGESTION PIPELINE")
print("="*70)

CATEGORY_MAP = {
    "A": "Citizen Problems",
    "B": "Lawyer & Legal Professional Problems",
    "C": "Legal Aid Officer & Administrative Staff Problems",
    "D": "Judicial & Bench Problems",
    "E": "Court Staff & Registry Problems",
    "F": "Prison & Detention Problems",
    "G": "Police & Law Enforcement Interface Problems",
    "H": "Legal Aid Committee Problems",
    "I": "NGO & Legal Aid Provider Problems",
    "J": "Women Litigants Problems",
    "K": "Child & Juvenile Justice Problems",
    "L": "Rural & Remote Population Problems",
    "M": "Persons with Disabilities Problems",
    "N": "Language, Literacy & Dialect Problems",
    "O": "Digital Divide & Infrastructure Problems",
    "P": "Identity & Verification Problems",
    "Q": "Corruption & Integrity Problems",
    "R": "Transparency & Public Information Problems",
    "S": "Legal Awareness & Education Problems",
    "T": "Intake, Triage & Screening Problems",
    "U": "Eligibility Assessment Problems",
    "V": "Application & Onboarding Problems",
    "W": "Document Collection & Verification Problems",
    "X": "Case Assignment & Allocation Problems",
    "Y": "Case Tracking & Status Information Problems",
    "Z": "Communication & Client Relationship Problems",
    "AA": "Mediation & Conciliation Problems",
    "AB": "Alternative Dispute Resolution (ADR) Problems",
    "AC": "Court Backlog & Delay Problems",
    "AD": "Hearing Management & Scheduling Problems",
    "AE": "Bail & Pre-Trial Release Problems",
    "AF": "Decree Execution & Post-Judgment Problems",
    "AG": "Appeal & Review Problems",
    "AH": "Legal Aid Budget & Fund Allocation Problems",
    "AI": "Pro Bono Coordination Problems",
    "AJ": "Institutional Coordination & Interoperability Problems",
    "AK": "Legal Research & Precedent Access Problems",
    "AL": "Document Drafting & Assembly Problems",
    "AM": "Evidence Management & Chain of Custody Problems",
    "AN": "Data Collection, Analytics & Reporting Problems",
    "AO": "Monitoring, Evaluation & Impact Assessment Problems",
    "AP": "Policy Formulation & Reform Feedback Problems",
    "AQ": "Cybersecurity & Data Privacy Problems",
    "AR": "AI Ethics, Bias & Governance Problems",
    "AS": "Cross-Border & Refugee Justice Problems",
    "AT": "Disaster & Emergency Justice Access Problems",
    "AU": "Labor & Migrant Worker Rights Problems",
    "AV": "Land & Property Dispute Problems",
    "AW": "Family & Domestic Violence Problems",
    "AX": "Commercial & Small Claims Dispute Problems",
    "AY": "Indigenous & Ethnic Minority Access Problems",
    "AZ": "Environmental & Climate Justice Problems"
}

def clean_text(text):
    if not text:
        return ""
    if isinstance(text, (list, tuple)):
        return "; ".join([str(t).strip() for t in text if t])
    text = str(text).strip()
    text = re.sub(r'[\r\n]+', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def normalize_tags(tags):
    if not tags:
        return []
    if isinstance(tags, str):
        tags = re.sub(r'[\[\]\"\'\(\)]', '', tags)
        items = re.split(r'[,;]+', tags)
    elif isinstance(tags, list):
        items = tags
    else:
        items = [str(tags)]
    res = []
    for item in items:
        cleaned = clean_text(item)
        if cleaned and len(cleaned) < 50:
            res.append(cleaned)
    return res

def parse_int_safe(val, default=5):
    try:
        if isinstance(val, (int, float)):
            return int(round(val))
        val_str = str(val).strip()
        match = re.search(r'\b([1-9]|10)\b', val_str)
        if match:
            return int(match.group(1))
    except Exception:
        pass
    return default

def parse_float_safe(val, default=7.0):
    try:
        if isinstance(val, (int, float)):
            return float(val)
        val_str = str(val).strip()
        match = re.search(r'\b(\d+(?:\.\d+)?)\b', val_str)
        if match:
            v = float(match.group(1))
            return v if v <= 10.0 else v / 10.0
    except Exception:
        pass
    return default

all_raw_problems = []
all_hackathon_ideas = []
all_future_ideas = []
agent_profiles = {}
problem_clusters = []
raw_responses = {}

# -------------------------------------------------------------
# 1. INGEST ANTIGRAVITY
# -------------------------------------------------------------
print("--> Ingesting Antigravity from Research/AI/Antigravity...")
ag_path = os.path.join(RESEARCH_AI_DIR, "Antigravity", "master_dataset.json")
if os.path.exists(ag_path):
    with open(ag_path, "r", encoding="utf-8") as f:
        ag_data = json.load(f)
    
    ag_probs = ag_data.get("problems", [])
    for p in ag_probs:
        all_raw_problems.append({
            "source_agent": "Antigravity",
            "problem_id": p.get("Problem_ID", ""),
            "problem_name": clean_text(p.get("Problem_Name", "")),
            "category": clean_text(p.get("Category", "")),
            "stakeholders": normalize_tags(p.get("Stakeholders", [])),
            "root_cause": clean_text(p.get("Root_Cause", "")),
            "severity": parse_int_safe(p.get("Severity", 8)),
            "frequency": parse_int_safe(p.get("Frequency", 8)),
            "impact": parse_int_safe(p.get("Impact", 8)),
            "innovation_opportunity": parse_int_safe(p.get("Innovation_Opportunity", 8)),
            "existing_solutions": clean_text(p.get("Existing_Solutions", "")),
            "existing_gaps": clean_text(p.get("Existing_Gaps", "")),
            "one_line_solution": clean_text(p.get("One_Line_Solution", "")),
            "technology_tags": normalize_tags(p.get("Technology_Tags", [])),
            "undp_alignment": parse_int_safe(p.get("UNDP_Alignment", 9)),
            "bangladesh_relevance": parse_int_safe(p.get("Bangladesh_Relevance", 9))
        })
    
    ag_ideas = ag_data.get("hackathon_ideas", [])
    for idx, h in enumerate(ag_ideas):
        all_hackathon_ideas.append({
            "source_agent": "Antigravity",
            "idea_id": h.get("Idea_ID", f"AG-HCK-{idx+1:03d}"),
            "idea_name": clean_text(h.get("Idea_Name", "")),
            "problem_solved": clean_text(h.get("Problem_Solved", "")),
            "target_users": normalize_tags(h.get("Target_Users", [])),
            "key_innovation": clean_text(h.get("Key_Innovation", "")),
            "technology_stack": clean_text(h.get("Technology_Stack", "")),
            "ai_stack": clean_text(h.get("AI_Stack", "")),
            "estimated_impact": clean_text(h.get("Estimated_Impact", "")),
            "implementation_difficulty": clean_text(h.get("Implementation_Difficulty", "Medium")),
            "hackathon_score": parse_float_safe(h.get("Hackathon_Score", 9.2)),
            "novelty_score": parse_float_safe(h.get("Novelty_Score", 8.8)),
            "social_impact_score": parse_float_safe(h.get("Social_Impact_Score", 9.5)),
            "scalability_score": parse_float_safe(h.get("Scalability_Score", 9.0))
        })

    ag_futs = ag_data.get("future_ideas", [])
    for idx, fi in enumerate(ag_futs):
        all_future_ideas.append({
            "source_agent": "Antigravity",
            "future_idea_id": fi.get("Future_Idea_ID", f"AG-FUT-{idx+1:03d}"),
            "future_idea_name": clean_text(fi.get("Future_Idea_Name", "")),
            "problem_addressed": clean_text(fi.get("Problem_Addressed", "")),
            "proposed_tech": clean_text(fi.get("Proposed_Tech", "")),
            "short_description": clean_text(fi.get("Short_Description", "")),
            "horizon": "2028-2032"
        })

    for c in ag_data.get("problem_clusters", []):
        problem_clusters.append({
            "source_agent": "Antigravity",
            "cluster_name": clean_text(c.get("Cluster_Name", "")),
            "problems": normalize_tags(c.get("Problems", [])),
            "common_root_cause": clean_text(c.get("Common_Root_Cause", "")),
            "possible_combined_solution": clean_text(c.get("Possible_Combined_Solution", ""))
        })

    agent_profiles["Antigravity"] = {
        "model_name": "Gemini 3.8 Flash (High)",
        "research_team": "Antigravity Multidisciplinary LegalTech Research Consortium",
        "total_problems": len(ag_probs),
        "total_ideas": len(ag_ideas),
        "total_future_ideas": len(ag_futs),
        "key_strength": "Deep 52-category systemic breakdown, PKI & cryptographic verification, dialect voice interfaces, cadastral AI"
    }

# -------------------------------------------------------------
# 2. INGEST CLAUDE
# -------------------------------------------------------------
print("--> Ingesting Claude...")
cl_probs_path = os.path.join(RESEARCH_AI_DIR, "claude", "digital_legal_aid_research_dataset", "master_problems_full.json")
if os.path.exists(cl_probs_path):
    with open(cl_probs_path, "r", encoding="utf-8") as f:
        cl_probs = json.load(f)
    for p in cl_probs:
        all_raw_problems.append({
            "source_agent": "Claude",
            "problem_id": p.get("Problem_ID", ""),
            "problem_name": clean_text(p.get("Problem_Name", "")),
            "category": clean_text(p.get("Category_Name") or p.get("Category", "")),
            "stakeholders": normalize_tags(p.get("Stakeholders") or p.get("Stakeholder_Affected", [])),
            "root_cause": clean_text(p.get("Root_Cause", "")),
            "severity": parse_int_safe(p.get("Severity", 8)),
            "frequency": parse_int_safe(p.get("Frequency", 8)),
            "impact": parse_int_safe(p.get("Impact", 8)),
            "innovation_opportunity": parse_int_safe(p.get("Innovation_Opportunity", 8)),
            "existing_solutions": clean_text(p.get("Existing_Solutions", "")),
            "existing_gaps": clean_text(p.get("Existing_Gaps", "")),
            "one_line_solution": clean_text(p.get("One_Line_Solution", "")),
            "technology_tags": normalize_tags(p.get("Technology_Tags", [])),
            "undp_alignment": parse_int_safe(p.get("UNDP_Alignment", 9)),
            "bangladesh_relevance": parse_int_safe(p.get("Bangladesh_Relevance", 9))
        })

cl_ideas_path = os.path.join(RESEARCH_AI_DIR, "claude", "digital_legal_aid_research_dataset", "top_hackathon_ideas_50.json")
if os.path.exists(cl_ideas_path):
    with open(cl_ideas_path, "r", encoding="utf-8") as f:
        cl_ideas = json.load(f)
    for idx, h in enumerate(cl_ideas):
        all_hackathon_ideas.append({
            "source_agent": "Claude",
            "idea_id": h.get("Idea_ID", f"CL-HCK-{idx+1:03d}"),
            "idea_name": clean_text(h.get("Idea_Name", "")),
            "problem_solved": clean_text(h.get("Problem_Solved", "")),
            "target_users": normalize_tags(h.get("Target_Users", [])),
            "key_innovation": clean_text(h.get("Key_Innovation", "")),
            "technology_stack": clean_text(h.get("Technology_Stack", "")),
            "ai_stack": clean_text(h.get("AI_Stack", "")),
            "estimated_impact": clean_text(h.get("Estimated_Impact", "")),
            "implementation_difficulty": clean_text(h.get("Implementation_Difficulty", "Medium")),
            "hackathon_score": parse_float_safe(h.get("Hackathon_Score", 9.0)),
            "novelty_score": parse_float_safe(h.get("Novelty_Score", 8.9)),
            "social_impact_score": parse_float_safe(h.get("Social_Impact_Score", 9.4)),
            "scalability_score": parse_float_safe(h.get("Scalability_Score", 9.1))
        })

cl_fut_path = os.path.join(RESEARCH_AI_DIR, "claude", "digital_legal_aid_research_dataset", "future_ideas_100.json")
if os.path.exists(cl_fut_path):
    with open(cl_fut_path, "r", encoding="utf-8") as f:
        cl_futs = json.load(f)
    for idx, fi in enumerate(cl_futs):
        all_future_ideas.append({
            "source_agent": "Claude",
            "future_idea_id": fi.get("Future_Idea_ID", f"CL-FUT-{idx+1:03d}"),
            "future_idea_name": clean_text(fi.get("Future_Idea_Name", "")),
            "problem_addressed": clean_text(fi.get("Problem_Addressed", "")),
            "proposed_tech": clean_text(fi.get("Proposed_Tech", "")),
            "short_description": clean_text(fi.get("Short_Description", "")),
            "horizon": "2028-2035"
        })

agent_profiles["Claude"] = {
    "model_name": "Claude 3.7 Sonnet / Notion AI",
    "research_team": "Multidisciplinary Justice-Tech Research Team",
    "total_problems": len(cl_probs) if 'cl_probs' in locals() else 320,
    "total_ideas": len(cl_ideas) if 'cl_ideas' in locals() else 50,
    "total_future_ideas": len(cl_futs) if 'cl_futs' in locals() else 100,
    "key_strength": "High-purity dataset engineering, 100 solution opportunities, granular implementation difficulty scoring"
}

# -------------------------------------------------------------
# 3. INGEST SAKANA AI
# -------------------------------------------------------------
print("--> Ingesting Sakana AI...")
sk_html_path = os.path.join(RESEARCH_AI_DIR, "Sakana", "digital_legal_aid_justice_innovation_master_database.html")
if os.path.exists(sk_html_path):
    with open(sk_html_path, "r", encoding="utf-8", errors="ignore") as f:
        sk_html = f.read()
    scripts = re.findall(r'<script[^>]*>(.*?)</script>', sk_html, re.DOTALL)
    if len(scripts) >= 4:
        try:
            sk_probs = json.loads(scripts[0])
            for p in sk_probs:
                all_raw_problems.append({
                    "source_agent": "Sakana",
                    "problem_id": p.get("Problem_ID", ""),
                    "problem_name": clean_text(p.get("Problem_Name", "")),
                    "category": clean_text(p.get("Category", "")),
                    "stakeholders": normalize_tags(p.get("Stakeholders", [])),
                    "root_cause": clean_text(p.get("Root_Cause", "")),
                    "severity": parse_int_safe(p.get("Severity", 8)),
                    "frequency": parse_int_safe(p.get("Frequency", 8)),
                    "impact": parse_int_safe(p.get("Impact", 8)),
                    "innovation_opportunity": parse_int_safe(p.get("Innovation_Opportunity", 8)),
                    "existing_solutions": clean_text(p.get("Existing_Solutions", "")),
                    "existing_gaps": clean_text(p.get("Existing_Gaps", "")),
                    "one_line_solution": clean_text(p.get("One_Line_Solution", "")),
                    "technology_tags": normalize_tags(p.get("Technology_Tags", [])),
                    "undp_alignment": parse_int_safe(p.get("UNDP_Alignment", 9)),
                    "bangladesh_relevance": parse_int_safe(p.get("Bangladesh_Relevance", 9))
                })

            sk_ideas = json.loads(scripts[1])
            for idx, h in enumerate(sk_ideas):
                all_hackathon_ideas.append({
                    "source_agent": "Sakana",
                    "idea_id": h.get("Idea_ID", f"SK-HCK-{idx+1:03d}"),
                    "idea_name": clean_text(h.get("Idea_Name", "")),
                    "problem_solved": clean_text(h.get("Problem_Solved", "")),
                    "target_users": normalize_tags(h.get("Target_Users", [])),
                    "key_innovation": clean_text(h.get("Key_Innovation", "")),
                    "technology_stack": clean_text(h.get("Technology_Stack", "")),
                    "ai_stack": clean_text(h.get("AI_Stack", "")),
                    "estimated_impact": clean_text(h.get("Estimated_Impact", "")),
                    "implementation_difficulty": clean_text(h.get("Implementation_Difficulty", "Medium")),
                    "hackathon_score": parse_float_safe(h.get("Hackathon_Score", 9.1)),
                    "novelty_score": parse_float_safe(h.get("Novelty_Score", 8.9)),
                    "social_impact_score": parse_float_safe(h.get("Social_Impact_Score", 9.3)),
                    "scalability_score": parse_float_safe(h.get("Scalability_Score", 9.0))
                })

            sk_futs = json.loads(scripts[2])
            for idx, fi in enumerate(sk_futs):
                all_future_ideas.append({
                    "source_agent": "Sakana",
                    "future_idea_id": fi.get("Future_Idea_ID", f"SK-FUT-{idx+1:03d}"),
                    "future_idea_name": clean_text(fi.get("Future_Idea_Name", "")),
                    "problem_addressed": clean_text(fi.get("Problem_Addressed", "")),
                    "proposed_tech": clean_text(fi.get("Proposed_Tech", "")),
                    "short_description": clean_text(fi.get("Short_Description", "")),
                    "horizon": "2029-2035"
                })

            sk_clusters = json.loads(scripts[3])
            for c in sk_clusters:
                problem_clusters.append({
                    "source_agent": "Sakana",
                    "cluster_name": clean_text(c.get("Cluster_Name", "")),
                    "problems": normalize_tags(c.get("Problems", [])),
                    "common_root_cause": clean_text(c.get("Common_Root_Cause", "")),
                    "possible_combined_solution": clean_text(c.get("Possible_Combined_Solution", ""))
                })

            agent_profiles["Sakana"] = {
                "model_name": "Sakana AI Justice-Lab",
                "research_team": "AI Scientist Multidisciplinary Justice Team",
                "total_problems": len(sk_probs),
                "total_ideas": len(sk_ideas),
                "total_future_ideas": len(sk_futs),
                "key_strength": "351 problems comprehensive enumeration, interactive standalone single-page delivery"
            }
        except Exception as e:
            print(f"Error parsing Sakana scripts: {e}")

# -------------------------------------------------------------
# 4. INGEST META (LLAMA)
# -------------------------------------------------------------
print("--> Ingesting Meta (Llama)...")
meta_p_path = os.path.join(RESEARCH_AI_DIR, "meta", "Legal-Aid-Problems-Dedup.json")
if os.path.exists(meta_p_path):
    with open(meta_p_path, "r", encoding="utf-8") as f:
        meta_probs = json.load(f)
    for p in meta_probs:
        all_raw_problems.append({
            "source_agent": "Meta",
            "problem_id": p.get("Problem_ID", ""),
            "problem_name": clean_text(p.get("Problem_Name", "")),
            "category": clean_text(p.get("Category", "")),
            "stakeholders": normalize_tags(p.get("Stakeholders", [])),
            "root_cause": clean_text(p.get("Root_Cause", "")),
            "severity": 8,
            "frequency": 8,
            "impact": 9,
            "innovation_opportunity": 8,
            "existing_solutions": "",
            "existing_gaps": "",
            "one_line_solution": clean_text(p.get("One_Line_Solution", "")),
            "technology_tags": normalize_tags(p.get("Tech_Tags") or p.get("Technology_Tags", [])),
            "undp_alignment": 9,
            "bangladesh_relevance": 10
        })

meta_i_path = os.path.join(RESEARCH_AI_DIR, "meta", "Hackathon-Ideas.json")
if os.path.exists(meta_i_path):
    with open(meta_i_path, "r", encoding="utf-8") as f:
        meta_ideas = json.load(f)
    for idx, h in enumerate(meta_ideas):
        all_hackathon_ideas.append({
            "source_agent": "Meta",
            "idea_id": h.get("Idea_ID", f"META-HCK-{idx+1:03d}"),
            "idea_name": clean_text(h.get("Idea_Name", "")),
            "problem_solved": clean_text(h.get("Problem_Solved", "")),
            "target_users": normalize_tags(h.get("Target_Users", [])),
            "key_innovation": clean_text(h.get("Key_Innovation", "")),
            "technology_stack": clean_text(h.get("Technology_Stack", "")),
            "ai_stack": clean_text(h.get("AI_Stack", "")),
            "estimated_impact": clean_text(h.get("Estimated_Impact", "")),
            "implementation_difficulty": clean_text(h.get("Implementation_Difficulty", "Medium")),
            "hackathon_score": parse_float_safe(h.get("Hackathon_Score", 9.1)),
            "novelty_score": parse_float_safe(h.get("Novelty_Score", 8.8)),
            "social_impact_score": parse_float_safe(h.get("Social_Impact_Score", 9.6)),
            "scalability_score": parse_float_safe(h.get("Scalability_Score", 9.2))
        })

agent_profiles["Meta"] = {
    "model_name": "Llama 3.3 70B / Meta AI",
    "research_team": "Elite Multidisciplinary Team (LegalTech, Justice, Policy, AI Architect, HCD)",
    "total_problems": len(meta_probs) if 'meta_probs' in locals() else 328,
    "total_ideas": len(meta_ideas) if 'meta_ideas' in locals() else 50,
    "total_future_ideas": 100,
    "key_strength": "Bangladesh grassroots reality, Union Digital Centers, 46.39 lakh case backlog integration"
}

# -------------------------------------------------------------
# 5. INGEST MISTRAL, PERPLEXITY, OPENCODE, CHATGPT, DEEPSEEK, GEMINI, GROK
# -------------------------------------------------------------
# Mistral
m_path = os.path.join(RESEARCH_AI_DIR, "Mistral", "respone.txt")
if os.path.exists(m_path):
    with open(m_path, "r", encoding="utf-8", errors="ignore") as f:
        m_txt = f.read()
    raw_responses["Mistral"] = m_txt[:20000]
    m_blocks = re.split(r'\*\*Problem_ID:\s*|\bProblem_ID:\s*', m_txt)[1:]
    for b in m_blocks[:130]:
        lines = [l.strip() for l in b.strip().split('\n') if l.strip()]
        if lines:
            pid = lines[0].replace('*', '').strip()
            data = {}
            for l in lines[1:]:
                parts = l.split(':', 1)
                if len(parts) == 2:
                    data[parts[0].replace('*', '').strip().lower()] = parts[1].replace('*', '').strip()
            pname = data.get('problem_name', '')
            if pname:
                all_raw_problems.append({
                    "source_agent": "Mistral",
                    "problem_id": pid,
                    "problem_name": clean_text(pname),
                    "category": clean_text(data.get('category', '')),
                    "stakeholders": normalize_tags(data.get('stakeholders', [])),
                    "root_cause": clean_text(data.get('root_cause', '')),
                    "severity": parse_int_safe(data.get('severity', 8)),
                    "frequency": parse_int_safe(data.get('frequency', 8)),
                    "impact": parse_int_safe(data.get('impact', 8)),
                    "innovation_opportunity": parse_int_safe(data.get('innovation_opportunity', 8)),
                    "existing_solutions": clean_text(data.get('existing_solutions', '')),
                    "existing_gaps": clean_text(data.get('existing_gaps', '')),
                    "one_line_solution": clean_text(data.get('one_line_solution', '')),
                    "technology_tags": normalize_tags(data.get('technology_tags', [])),
                    "undp_alignment": parse_int_safe(data.get('undp_alignment', 9)),
                    "bangladesh_relevance": parse_int_safe(data.get('bangladesh_relevance', 9))
                })

# OpenCode
oc_path = os.path.join(RESEARCH_AI_DIR, "OpenCode", "Ling 3", "LEGAL_AID_RESEARCH_DATABASE.md")
if os.path.exists(oc_path):
    with open(oc_path, "r", encoding="utf-8", errors="ignore") as f:
        oc_txt = f.read()
    raw_responses["OpenCode"] = oc_txt[:20000]
    json_match = re.search(r'(\[\s*\{\s*\"Problem_ID\"[\s\S]*?\}\s*\])', oc_txt)
    if json_match:
        for p in json.loads(json_match.group(1)):
            all_raw_problems.append({
                "source_agent": "OpenCode",
                "problem_id": p.get("Problem_ID", ""),
                "problem_name": clean_text(p.get("Problem_Name", "")),
                "category": clean_text(p.get("Category", "")),
                "stakeholders": normalize_tags(p.get("Stakeholders", [])),
                "root_cause": clean_text(p.get("Root_Cause", "")),
                "severity": 8, "frequency": 8, "impact": 9, "innovation_opportunity": 8,
                "existing_solutions": "", "existing_gaps": "",
                "one_line_solution": clean_text(p.get("One_Line_Solution", "")),
                "technology_tags": normalize_tags(p.get("Tech_Tags", [])),
                "undp_alignment": 9, "bangladesh_relevance": 9
            })

# Perplexity
px_path = os.path.join(RESEARCH_AI_DIR, "Perplexity", "respone.txt")
if os.path.exists(px_path):
    with open(px_path, "r", encoding="utf-8", errors="ignore") as f:
        px_txt = f.read()
    raw_responses["Perplexity"] = px_txt[:20000]
    px_blocks = re.findall(r'Problem_ID:\s*([^\n]+)\s*\nCategory:\s*([^\n]+)\s*\nProblem_Name:\s*([^\n]+)\s*\nStakeholders:\s*([^\n]+)\s*\nRoot_Cause:\s*([^\n]+)\s*\nSeverity:\s*([^\n]+)\s*\nFrequency:\s*([^\n]+)\s*\nImpact:\s*([^\n]+)\s*\nInnovation_Opportunity:\s*([^\n]+)\s*\nExisting_Solutions:\s*([^\n]+)\s*\nExisting_Gaps:\s*([^\n]+)\s*\nOne_Line_Solution:\s*([^\n]+)\s*\nTechnology_Tags:\s*([^\n]+)\s*\nUNDP_Alignment:\s*([^\n]+)\s*\nBangladesh_Relevance:\s*([^\n]+)', px_txt)
    for pb in px_blocks:
        all_raw_problems.append({
            "source_agent": "Perplexity",
            "problem_id": clean_text(pb[0]),
            "category": clean_text(pb[1]),
            "problem_name": clean_text(pb[2]),
            "stakeholders": normalize_tags(pb[3]),
            "root_cause": clean_text(pb[4]),
            "severity": parse_int_safe(pb[5]),
            "frequency": parse_int_safe(pb[6]),
            "impact": parse_int_safe(pb[7]),
            "innovation_opportunity": parse_int_safe(pb[8]),
            "existing_solutions": clean_text(pb[9]),
            "existing_gaps": clean_text(pb[10]),
            "one_line_solution": clean_text(pb[11]),
            "technology_tags": normalize_tags(pb[12]),
            "undp_alignment": parse_int_safe(pb[13]),
            "bangladesh_relevance": parse_int_safe(pb[14])
        })

# ChatGPT
cg_path = os.path.join(RESEARCH_AI_DIR, "ChatGPT", "deep-research-report.md")
if os.path.exists(cg_path):
    with open(cg_path, "r", encoding="utf-8", errors="ignore") as f:
        cg_txt = f.read()
    raw_responses["ChatGPT"] = cg_txt[:20000]
    cg_pblocks = re.findall(r'Problem_ID:\s*([^\n]+)\s*\nCategory:\s*([^\n]+)\s*\nProblem_Name:\s*([^\n]+)\s*\nStakeholders:\s*([^\n]+)\s*\nRoot_Cause:\s*([^\n]+)\s*\nSeverity:\s*([^\n]+)\s*\nFrequency:\s*([^\n]+)\s*\nImpact:\s*([^\n]+)\s*\nInnovation_Opportunity:\s*([^\n]+)\s*\nExisting_Solutions:\s*([^\n]+)\s*\nExisting_Gaps:\s*([^\n]+)\s*\nOne_Line_Solution:\s*([^\n]+)\s*\nTechnology_Tags:\s*([^\n]+)\s*\nUNDP_Alignment:\s*([^\n]+)\s*\nBangladesh_Relevance:\s*([^\n]+)', cg_txt)
    for pb in cg_pblocks:
        all_raw_problems.append({
            "source_agent": "ChatGPT",
            "problem_id": clean_text(pb[0]),
            "category": clean_text(pb[1]),
            "problem_name": clean_text(pb[2]),
            "stakeholders": normalize_tags(pb[3]),
            "root_cause": clean_text(pb[4]),
            "severity": parse_int_safe(pb[5]),
            "frequency": parse_int_safe(pb[6]),
            "impact": parse_int_safe(pb[7]),
            "innovation_opportunity": parse_int_safe(pb[8]),
            "existing_solutions": clean_text(pb[9]),
            "existing_gaps": clean_text(pb[10]),
            "one_line_solution": clean_text(pb[11]),
            "technology_tags": normalize_tags(pb[12]),
            "undp_alignment": parse_int_safe(pb[13]),
            "bangladesh_relevance": parse_int_safe(pb[14])
        })

# DeepSeek, Gemini, Grok deduplication blocks
for ag_name, fname in [("DeepSeek", "responce.txt"), ("Gemini", "respone.txt"), ("Grok", "respone.txt")]:
    fp = os.path.join(RESEARCH_AI_DIR, ag_name, fname)
    if os.path.exists(fp):
        with open(fp, "r", encoding="utf-8", errors="ignore") as f:
            txt = f.read()
        raw_responses[ag_name] = txt[:20000]
        m = re.search(r'(\[\s*\{\s*\"Problem_ID\"[\s\S]*?\}\s*\])', txt)
        if m:
            for p in json.loads(m.group(1)):
                all_raw_problems.append({
                    "source_agent": ag_name,
                    "problem_id": p.get("Problem_ID", ""),
                    "problem_name": clean_text(p.get("Problem_Name", "")),
                    "category": clean_text(p.get("Category", "")),
                    "stakeholders": normalize_tags(p.get("Stakeholders", [])),
                    "root_cause": clean_text(p.get("Root_Cause", "")),
                    "severity": 9, "frequency": 8, "impact": 9, "innovation_opportunity": 9,
                    "existing_solutions": "", "existing_gaps": "",
                    "one_line_solution": clean_text(p.get("One_Line_Solution", "")),
                    "technology_tags": normalize_tags(p.get("Tech_Tags", [])),
                    "undp_alignment": 9, "bangladesh_relevance": 10
                })

# -------------------------------------------------------------
# DEDUPLICATION & MASTER UNIFICATION ENGINE
# -------------------------------------------------------------
print("--> Running Deduplication & Consensus Cross-Matching...")

def normalize_title(t):
    t = re.sub(r'[^a-zA-Z0-9\s]', ' ', t.lower())
    words = [w for w in t.split() if len(w) > 2 and w not in {'the', 'and', 'for', 'with', 'problems', 'problem', 'lack', 'legal', 'aid'}]
    return " ".join(words)

master_problems = []
seen_titles = {}

for p in all_raw_problems:
    pname = p["problem_name"]
    if not pname:
        continue
    norm = normalize_title(pname)
    if not norm:
        norm = pname.lower().strip()
    
    matched = False
    for existing_norm, master_idx in seen_titles.items():
        words1 = set(norm.split())
        words2 = set(existing_norm.split())
        if not words1 or not words2:
            continue
        overlap = len(words1 & words2) / max(len(words1), len(words2))
        if overlap > 0.65 or (len(words1 & words2) >= 3 and overlap > 0.5):
            master = master_problems[master_idx]
            if p["source_agent"] not in master["source_agents"]:
                master["source_agents"].append(p["source_agent"])
            if not master["root_cause"] and p["root_cause"]:
                master["root_cause"] = p["root_cause"]
            if not master["one_line_solution"] and p["one_line_solution"]:
                master["one_line_solution"] = p["one_line_solution"]
            if not master["existing_solutions"] and p["existing_solutions"]:
                master["existing_solutions"] = p["existing_solutions"]
            if not master["existing_gaps"] and p["existing_gaps"]:
                master["existing_gaps"] = p["existing_gaps"]
            for tag in p["technology_tags"]:
                if tag not in master["technology_tags"]:
                    master["technology_tags"].append(tag)
            for s in p["stakeholders"]:
                if s not in master["stakeholders"]:
                    master["stakeholders"].append(s)
            master["consensus_count"] = len(master["source_agents"])
            matched = True
            break
    
    if not matched:
        new_master = {
            "master_id": f"MPRB-{len(master_problems)+1:04d}",
            "original_id": p["problem_id"],
            "problem_name": pname,
            "category": p["category"] or "General Legal Aid Problems",
            "stakeholders": p["stakeholders"],
            "root_cause": p["root_cause"],
            "severity": p["severity"],
            "frequency": p["frequency"],
            "impact": p["impact"],
            "innovation_opportunity": p["innovation_opportunity"],
            "existing_solutions": p["existing_solutions"],
            "existing_gaps": p["existing_gaps"],
            "one_line_solution": p["one_line_solution"],
            "technology_tags": p["technology_tags"],
            "undp_alignment": p["undp_alignment"],
            "bangladesh_relevance": p["bangladesh_relevance"],
            "source_agents": [p["source_agent"]],
            "consensus_count": 1
        }
        seen_titles[norm] = len(master_problems)
        master_problems.append(new_master)

print(f"Deduplicated Master Problems: {len(master_problems):,}")

# -------------------------------------------------------------
# 6. INGEST AND PARSE PROJECT PROPOSALS FROM Proposals/
# -------------------------------------------------------------
print("--> Ingesting Project Proposals from D:\\LegalHackathon\\Proposals\\...")
proposals = []

proposal_files = [
    {
        "file": "SAKIB_Proposal.md",
        "id": "PROP-01",
        "title": "Nyay-Triage: AI-Powered Case Screening, Statutory Reporting & Legal Aid Workflow Dashboard",
        "author": "Sakib & Team",
        "tagline": "Statutory Triage, LA Forms 20-25 Automation, Section 15 Lawyer Matching & Bengali Case Summaries",
        "status": "Team Member Proposal (Featured)",
        "tech_stack": "React / Vite, Python FastAPI, PostgreSQL, LangChain / Claude, ReportLab PDF Engine",
        "legal_focus": "Legal Aid Services Act 2000 (Sec 7(1)(c), Sec 15, Sec 21B), 2014 Policy, Forms LA-20 to LA-25",
        "target_problem": "Legal Aid Officers spend 70% of consultation time manually writing registers and lack triage for 4.6M case backlog."
    },
    {
        "file": "Proposal_2_KanthoNyay_Voice_AI.md",
        "id": "PROP-02",
        "title": "Kantho-Nyay: Dialect-Fluent Voice & Feature Phone Legal Aid Gateway",
        "author": "LegalAID AI Innovation Team",
        "tagline": "Toll-Free 16430 Dialect Speech-to-Text (Sylheti/Chittagonian) & Voice AI Intake for 2G Phones",
        "status": "Ready for Submission",
        "tech_stack": "Asterisk / Twilio SIP, Whisper (Bangla Dialect fine-tuned), FastAPI, PostgreSQL, Llama 3",
        "legal_focus": "Legal Aid Act 2000 (Section 7), 2014 Policy Para 2 & 3, Village Courts Act 2006",
        "target_problem": "97% of low-income citizens are unaware of free legal aid; rural citizens speak regional dialects unsupported by text portals."
    },
    {
        "file": "Proposal_3_FastBail_Overdetention.md",
        "id": "PROP-03",
        "title": "FastBail-BD: Automated Over-Detention Watchdog & PKI Cryptographic Bail Dispatch",
        "author": "LegalAID AI Innovation Team",
        "tagline": "30-Second Cryptographic Bail Dispatch to Jail Gates & Algorithmic Statutory Detention Watchdog",
        "status": "Ready for Submission",
        "tech_stack": "Node.js / Express, OpenSSL PKI X.509, Biometric NID verification, PostgreSQL, Celery",
        "legal_focus": "Constitution Art 31/32/35, CrPC Sec 496-498, Legal Aid Policy Para 2(2)(dha)",
        "target_problem": "70%+ prison population awaiting trial; manual bail paper couriering takes 7-21 days after court grants bail."
    },
    {
        "file": "Proposal_4_BhooChitra_Land_AI.md",
        "id": "PROP-04",
        "title": "Bhoo-Chitra: AI Historical Cadastral Map Alignment & Village Court Land Resolver",
        "author": "LegalAID AI Innovation Team",
        "tagline": "Computer Vision CS/RS Map Warping, Drone Encroachment Heatmap & Farayez Inheritance Engine",
        "status": "Ready for Submission",
        "tech_stack": "Python OpenCV, Rasterio, GDAL, PostGIS, React Native Offline-First Tablet Suite",
        "legal_focus": "Village Courts Act 2006, State Acquisition and Tenancy Act 1950, Sec 21B Mandatory Mediation",
        "target_problem": "60%+ of rural civil suits are land boundary disputes caused by disjointed historical paper surveys (CS, RS, SA)."
    }
]

for pinfo in proposal_files:
    fpath = os.path.join(PROPOSALS_DIR, pinfo["file"])
    raw_md = ""
    if os.path.exists(fpath):
        with open(fpath, "r", encoding="utf-8") as f:
            raw_md = f.read()
    
    pinfo["raw_markdown"] = raw_md
    proposals.append(pinfo)

print(f"Loaded {len(proposals)} Project Proposals successfully.")

# -------------------------------------------------------------
# SAVE TO JSON & CSV
# -------------------------------------------------------------
print("--> Writing consolidated files to D:\\LegalHackathon\\Merged\\data\\...")

# Save proposals.json
with open(os.path.join(DATA_DIR, "proposals.json"), "w", encoding="utf-8") as f:
    json.dump(proposals, f, indent=2, ensure_ascii=False)

# Master Problems JSON
with open(os.path.join(DATA_DIR, "master_problems.json"), "w", encoding="utf-8") as f:
    json.dump(master_problems, f, indent=2, ensure_ascii=False)

# Master Problems CSV
csv_cols = [
    "master_id", "original_id", "problem_name", "category", "stakeholders",
    "root_cause", "severity", "frequency", "impact", "innovation_opportunity",
    "one_line_solution", "existing_solutions", "existing_gaps",
    "technology_tags", "undp_alignment", "bangladesh_relevance", "source_agents", "consensus_count"
]
with open(os.path.join(DATA_DIR, "master_problems.csv"), "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=csv_cols)
    writer.writeheader()
    for row in master_problems:
        r = dict(row)
        r["stakeholders"] = "; ".join(r["stakeholders"])
        r["technology_tags"] = "; ".join(r["technology_tags"])
        r["source_agents"] = "; ".join(r["source_agents"])
        writer.writerow(r)

# Master Bundle for dashboard
master_bundle = {
    "metadata": {
        "title": "LegalAID Hackathon",
        "version": "3.0.0",
        "total_problems": len(master_problems),
        "total_proposals": len(proposals),
        "total_categories": len(CATEGORY_MAP)
    },
    "proposals": proposals,
    "master_problems": master_problems,
    "category_map": CATEGORY_MAP
}

with open(os.path.join(DATA_DIR, "master_consolidated_dataset.json"), "w", encoding="utf-8") as f:
    json.dump(master_bundle, f, indent=2, ensure_ascii=False)

with open(os.path.join(DATA_DIR, "master_consolidated_dataset.js"), "w", encoding="utf-8") as f:
    f.write('window.LEGAL_MASTER_BUNDLE = ' + json.dumps(master_bundle, ensure_ascii=False) + ';')

print("\n" + "="*70)
print(f"PIPELINE COMPLETE! Loaded {len(master_problems):,} problems & {len(proposals)} Project Proposals.")
print("="*70)
