### **Project Name (Proposed Title)**

**"Bhoo-Chitra: AI Historical Cadastral Map Alignment & Village Court Land Dispute Resolver"**

---

### **1. Executive Summary & Problem Addressed**

In rural Bangladesh:
- **60%+ of Civil Litigation is Land-Related:** More than six out of every ten civil lawsuits in subordinate courts originate from property boundary disputes, contested inheritance, and land grabbing.
- **Mismatched Historical Land Surveys:** Bangladesh land administration spans multiple colonial and post-colonial surveys—**Cadastral Survey (CS, 1888–1940)**, **State Acquisition (SA, 1956–1962)**, **Revisional Survey (RS, 1970–1990)**, and the modern **City/BS Survey**. Over time, river erosion, paper map distortion, and manual surveyor fraud create conflicting plot boundaries.
- **Village Court Impasse:** Under the **Village Courts Act 2006**, Union Parishad Chairmen are tasked with resolving local disputes, but they lack surveying expertise, geographic software, or objective boundary reconciliation tools to decide small boundary disputes justly.

**Bhoo-Chitra** uses Computer Vision and Geographic Information Systems (GIS) to automatically align historical cadastral maps (CS, RS) with modern drone and satellite imagery, generating an objective, indisputable visual evidence brief for Village Courts and Legal Aid mediators.

---

### **2. Core System Features & Workflow**

#### **a. Cadastral Survey AI Alignment (Computer Vision Map Warping)**
- Takes scanned paper CS/RS mouza sheets and applies Thin Plate Spline (TPS) transformation and homography alignment against modern satellite imagery (Google Earth / OpenStreetMap).
- Matches historical plot boundaries (dag numbers) directly with physical landmarks (canals, roads, boundary ridges) seen in drone or satellite photography.

#### **b. Boundary Encroachment & Discrepancy Heatmap**
- Detects where a modern fence, wall, or structure encroaches into an adjacent plot based on registered deed measurements (khatian dimensions).
- Generates an unambiguous, color-coded visual discrepancy overlay:
  - `Green`: Undisputed registered boundary.
  - `Red`: Encroachment / Boundary overlap zone (calculated in exact decimals and square feet).

#### **c. Farayez (Inheritance Share) Calculator Integration**
- Automatically parses family trees to calculate precise fractional inheritance shares under Muslim and Hindu personal law.
- Splits the disputed parcel geometrically according to each heir's exact statutory percentage, eliminating familial land partitioning feuds.

#### **d. 1-Click Village Court Mediation Brief**
- Generates an objective, easy-to-understand 2-page **"Land Dispute Resolution Report"** in Bengali for the Union Parishad Chairman and Legal Aid Officer.
- Details the verified area, boundary history, legal heirs, and recommended settlement lines, enabling quick resolution under **Section 21B Mandatory Pre-case Mediation**.

---

### **3. Aligned Legal Framework**

1. **Village Courts Act 2006 (Section 3 & Schedule Part 1):** Grants Union Parishad jurisdiction over local property trespassing and boundary disputes.
2. **State Acquisition and Tenancy Act 1950 (Sections 143, 144):** Governs maintenance and revision of records-of-rights (Khatian & Mouza maps).
3. **Legal Aid Services Act 2000 (Section 21B - 2026 Amendment):** Requires pre-case mediation at the District Legal Aid Office prior to protracted court litigation.
4. **Specific Relief Act 1877 (Section 8 & 9):** Provides recovery of possession of immovable property.

---

### **4. Technology Stack**

- **Computer Vision & Geospatial Engine:** Python, OpenCV, Rasterio, Shapely, GeoPandas, GDAL.
- **Mapping & Visualization:** Leaflet.js / OpenLayers / MapLibre GL with interactive side-by-side swipe comparison.
- **Inheritance Logic:** Deterministic mathematical share engine implementing classical Farayez rules.
- **Backend & Database:** FastAPI / PostGIS (spatial database for mouza plots and polygon boundaries).
- **Frontend / Mobile App:** React Native offline-first tablet application designed specifically for Union Parishad Chairmen and field paralegals.

---

### **5. Hackathon Prototype & Demo Scope**

1. **Interactive Map Comparison:** Interactive slider showing 1920s CS Map overlaid onto modern satellite imagery of a rural mouza plot.
2. **AI Encroachment Detection:** Highlight a 5.2 decimal encroachment where a new boundary wall violates the recorded RS khatian.
3. **Inheritance Split Generator:** Input 1 deceased owner, 2 sons, 2 daughters, 1 widow; automatically calculate decimal shares and partition the plot visually on the map.
4. **Generate Mediation Decree:** Export completed Bengali Village Court resolution report ready for chairman signature.
