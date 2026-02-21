import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, Users, FileText, Download, Trash2, 
  ShieldCheck, RefreshCw, Mail, Phone, Crown, ToggleRight, LayoutDashboard 
} from 'lucide-react';

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(null);
  
  // --- NEW: Recruitment Configuration State ---
  const [hiringConfig, setHiringConfig] = useState({
    status: 'ON',
    domains: ''
  });
  
  const navigate = useNavigate();

  // 1. API: Fetch All Applications & Settings
  const fetchData = async () => {
    try {
      setLoading(true);
      // Fetch Applications
      const appRes = await fetch('http://localhost/sk-prime-api/fetch_applications.php');
      const appResult = await appRes.json();
      if (appResult.status === "success") setApplications(appResult.data);

      // Fetch Recruitment Settings
      const setRes = await fetch('http://localhost/sk-prime-api/get_hiring_status.php');
      const setResult = await setRes.json();
      if (setResult.status === "success") {
        setHiringConfig({
          status: setResult.hiring,
          domains: setResult.positions
        });
      }
    } catch (error) {
      console.error("Data Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // 2. API: Update Recruitment Portal (Toggle + Domains)
  const updateRecruitmentPortal = async () => {
    try {
      const res = await fetch('http://localhost/sk-prime-api/update_hiring_status.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          hiring: hiringConfig.status, 
          positions: hiringConfig.domains 
        })
      });
      const result = await res.json();
      if (result.status === "success") alert("Portal Settings Updated!");
    } catch (error) {
      alert("Failed to update portal.");
    }
  };

  // 3. API: Delete Application
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this candidate from records?")) return;
    try {
      setDeleteLoading(id);
      const res = await fetch('http://localhost/sk-prime-api/delete_application.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id })
      });
      const result = await res.json();
      if (result.status === "success") {
        setApplications(applications.filter(app => app.id !== id));
      }
    } catch (error) {
      alert("Delete failed.");
    } finally {
      setDeleteLoading(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-12 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6 bg-[#001233] p-8 rounded-[2rem] shadow-2xl border-b-4 border-[#D4AF37]">
          <div className="flex items-center gap-5">
            <div className="p-4 bg-[#D4AF37] rounded-2xl shadow-lg rotate-3">
              <ShieldCheck className="text-[#001233]" size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">Command Center</h2>
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em]">SK Prime Group Pvt Ltd</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button onClick={fetchData} className="p-4 bg-white/5 text-[#D4AF37] rounded-xl hover:bg-[#D4AF37] hover:text-[#001233] transition-all border border-[#D4AF37]/20">
              <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
            </button>
            <button onClick={handleLogout} className="flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl">
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* --- LEFT: RECRUITMENT CONTROL --- */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <Crown className="text-[#D4AF37]" size={24} />
                <h3 className="font-black text-[#001233] uppercase tracking-tighter text-lg italic">Portal Control</h3>
              </div>

              <div className="space-y-8">
                {/* Status Toggle */}
                <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Hiring Portal</span>
                  <button 
                    onClick={() => setHiringConfig({...hiringConfig, status: hiringConfig.status === 'ON' ? 'OFF' : 'ON'})}
                    className={`px-6 py-2.5 rounded-full text-[10px] font-black transition-all shadow-md ${
                      hiringConfig.status === 'ON' ? 'bg-green-500 text-white' : 'bg-slate-300 text-slate-600'
                    }`}
                  >
                    {hiringConfig.status === 'ON' ? 'ACTIVE' : 'PAUSED'}
                  </button>
                </div>

                {/* Open Domains Input */}
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 block ml-1">Current Openings</label>
                  <textarea 
                    value={hiringConfig.domains}
                    onChange={(e) => setHiringConfig({...hiringConfig, domains: e.target.value})}
                    placeholder="e.g. HR Manager, Full Stack Developer, Graphics Designer"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm text-[#001233] focus:border-[#D4AF37] outline-none transition-all h-32 resize-none font-medium"
                  />
                  <p className="text-[9px] text-slate-400 mt-2 italic px-1">* Separate multiple roles with commas ( , )</p>
                </div>

                <button 
                  onClick={updateRecruitmentPortal}
                  className="w-full bg-[#001233] text-[#D4AF37] py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-[#D4AF37] hover:text-[#001233] transition-all shadow-2xl"
                >
                  Update Live Portal
                </button>
              </div>
            </div>

            {/* Quick Stat Card */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-between group">
              <div>
                <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Total Candidates</h4>
                <p className="text-5xl font-black text-[#001233]">{applications.length}</p>
              </div>
              <Users className="text-[#D4AF37]/20 group-hover:text-[#D4AF37] transition-colors" size={50} />
            </div>
          </div>

          {/* --- RIGHT: APPLICATIONS TABLE --- */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden h-full">
              <div className="p-10 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
                <h3 className="font-black text-[#001233] uppercase tracking-tighter text-xl flex items-center gap-4 italic">
                  <LayoutDashboard size={24} className="text-[#D4AF37]" /> Applicant Records
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white">
                      <th className="p-8 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">Candidate</th>
                      <th className="p-8 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">Details</th>
                      <th className="p-8 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {applications.length > 0 ? (
                      applications.map((app) => (
                        <tr key={app.id} className="hover:bg-slate-50/80 transition-all group">
                          <td className="p-8">
                            <div className="flex flex-col">
                              <span className="font-black text-[#001233] uppercase text-sm tracking-tight">{app.full_name}</span>
                              <span className="text-[10px] text-slate-400 mt-1 font-bold italic">ID: #SKP-{app.id}</span>
                            </div>
                          </td>
                          <td className="p-8">
                            <div className="flex flex-col gap-1.5">
                              <div className="flex items-center gap-2 text-[#001233] text-xs font-bold">
                                <Mail size={12} className="text-[#D4AF37]" /> {app.email}
                              </div>
                              <div className="flex items-center gap-2 text-slate-500 text-[11px] font-medium">
                                <Phone size={12} className="text-[#D4AF37]" /> {app.phone}
                              </div>
                            </div>
                          </td>
                          <td className="p-8 text-right">
                            <div className="flex justify-end gap-3">
                              <a href={`http://localhost/sk-prime-api/${app.resume_path}`} target="_blank" rel="noreferrer" className="p-3 bg-[#001233] text-[#D4AF37] rounded-xl hover:bg-[#D4AF37] hover:text-[#001233] transition-all">
                                <Download size={18} />
                              </a>
                              <button 
                                disabled={deleteLoading === app.id}
                                onClick={() => handleDelete(app.id)}
                                className={`p-3 rounded-xl transition-all ${
                                  deleteLoading === app.id ? "bg-slate-100 text-slate-300" : "bg-red-50 text-red-500 hover:bg-red-500 hover:text-white"
                                }`}
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr><td colSpan="3" className="p-32 text-center text-slate-300 font-bold uppercase tracking-[0.4em] italic text-[10px]">No Records Found</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center opacity-30">
          <p className="text-slate-400 font-black text-[10px] uppercase tracking-[1em]">SK PRIME COMMAND • ESTD 2026</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;