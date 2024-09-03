import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto bg-white p-6 shadow-lg">
      <h1 className="font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-6"><strong>My devices</strong></h1>
      <br /><br />
      <h1 className="text-blue-600 border-b-2 border-blue-600 pb-2 mb-4"><strong>Computers</strong></h1>
      <br />
      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-2 border border-gray-300">Codename</th>
            <th className="p-2 border border-gray-300">Status</th>
            <th className="p-2 border border-gray-300">System type</th>
            <th className="p-2 border border-gray-300">OS</th>
            <th className="p-2 border border-gray-300">CPU</th>
            <th className="p-2 border border-gray-300">Memory</th>
            <th className="p-2 border border-gray-300">GPU</th>
            <th className="p-2 border border-gray-300">Disk(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="p-2 border border-gray-300">Rome</td>
            <td className="p-2 border border-gray-300">In commission</td>
            <td className="p-2 border border-gray-300">MSI B550-A PRO (MS-7C56)</td>
            <td className="p-2 border border-gray-300">Microsoft Windows 11 Pro for Workstations 23H2</td>
            <td className="p-2 border border-gray-300">AMD Ryzen 7 5700X3D</td>
            <td className="p-2 border border-gray-300">32GB (2x16GB) DDR4-3200 UDIMM (XMP)</td>
            <td className="p-2 border border-gray-300">MSI MECH 2X Radeon RX 6700XT 12GB</td>
            <td className="p-2 border border-gray-300">
              NSID 1: 500GB KINGSTON NV2 NVMe PCIe 4.0 x4
              <br /><br />
              NSID 2: 500GB KINGSTON NV2 NVMe PCIe 4.0 x4
              <br /><br />
              SATA P0: 512GB Samsung 870 EVO
              <br /><br />
              SATA P1: 128GB PLEXTOR M8V
            </td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="p-2 border border-gray-300">Milan</td>
            <td className="p-2 border border-gray-300">In commission</td>
            <td className="p-2 border border-gray-300">ASUS Z9PA-D8C</td>
            <td className="p-2 border border-gray-300">Microsoft Windows Server 2022 with DEx</td>
            <td className="p-2 border border-gray-300">2x Intel Xeon E5-2697v2</td>
            <td className="p-2 border border-gray-300">192GB (8x24GB) DDR3-1866 ECC RDIMM</td>
            <td className="p-2 border border-gray-300">
              GPU 0: AMD Radeon PRO WX2100 2x16GB
              <br /><br />
              GPU 1: NVIDIA Quadro P4000 8GB
            </td>
            <td className="p-2 border border-gray-300">
              SATA P0: 512GB Samsung 870 EVO
              <br /><br />
              RAID 5: 8x 1TB WD Ultrastar DC-HA210
            </td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="p-2 border border-gray-300">Ferrara</td>
            <td className="p-2 border border-gray-300">In commission</td>
            <td className="p-2 border border-gray-300">OCI VM.Standard.A1.Flex</td>
            <td className="p-2 border border-gray-300">Canonical Ubuntu 22.04 LTS</td>
            <td className="p-2 border border-gray-300">4-OCPU Ampere Altra AArch64</td>
            <td className="p-2 border border-gray-300">24GB</td>
            <td className="p-2 border border-gray-300">Red Hat Virtio-GPU</td>
            <td className="p-2 border border-gray-300">200GB block volume</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="p-2 border border-gray-300">Bologna</td>
            <td className="p-2 border border-gray-300">In commission</td>
            <td className="p-2 border border-gray-300">ASUS VivoBook X1503ZA</td>
            <td className="p-2 border border-gray-300">Microsoft Windows 11 Pro 23H2</td>
            <td className="p-2 border border-gray-300">Intel Core i3-1220P</td>
            <td className="p-2 border border-gray-300">8GB DDR4-3200 SODIMM</td>
            <td className="p-2 border border-gray-300">Intel UHD Graphics 64EU</td>
            <td className="p-2 border border-gray-300">NSID 1: 256GB Micron 2450 NVMe PCIe 4.0 x4</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="p-2 border border-gray-300">Burano</td>
            <td className="p-2 border border-gray-300">In commission</td>
            <td className="p-2 border border-gray-300">Apple MacBook Pro 13&quot; 2019 (4 Thunderbolt ports)</td>
            <td className="p-2 border border-gray-300">Apple macOS Sonoma 14.6.1</td>
            <td className="p-2 border border-gray-300">Intel Core i7-8569U</td>
            <td className="p-2 border border-gray-300">16GB LPDDR3-2133 soldered</td>
            <td className="p-2 border border-gray-300">Intel Iris Plus 655 128MB eDRAM</td>
            <td className="p-2 border border-gray-300">512GB soldered SSD, NVMe</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="p-2 border border-gray-300">Genoa</td>
            <td className="p-2 border border-gray-300">Decommissioned</td>
            <td className="p-2 border border-gray-300">Gigabyte GA-B75M-D3H</td>
            <td className="p-2 border border-gray-300">Microsoft Windows 10 Pro 22H2</td>
            <td className="p-2 border border-gray-300">Intel Core i7-3770</td>
            <td className="p-2 border border-gray-300">16GB (4x4GB) DDR3-1600 UDIMM</td>
            <td className="p-2 border border-gray-300">NVIDIA GeForce GTX 1050 Ti 4GB</td>
            <td className="p-2 border border-gray-300">
              SATA P0: 256GB Samsung 870 EVO
              <br /><br />
              SATA P1: 128GB Lexar NS100
            </td>
          </tr>
        </tbody>
      </table>
      <br /><br />
      <h1 className="text-blue-600 border-b-2 border-blue-600 pb-2 mb-4"><strong>Mobile devices</strong></h1>
      <br />
      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-2 border border-gray-300">Codename</th>
            <th className="p-2 border border-gray-300">Status</th>
            <th className="p-2 border border-gray-300">System type</th>
            <th className="p-2 border border-gray-300">OS</th>
            <th className="p-2 border border-gray-300">CPU</th>
            <th className="p-2 border border-gray-300">Memory</th>
            <th className="p-2 border border-gray-300">GPU</th>
            <th className="p-2 border border-gray-300">Storage</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="p-2 border border-gray-300">Venice</td>
            <td className="p-2 border border-gray-300">In commission</td>
            <td className="p-2 border border-gray-300">Apple iPhone SE 2</td>
            <td className="p-2 border border-gray-300">Apple iOS 18.0 Beta 8</td>
            <td className="p-2 border border-gray-300">Apple A13 Bionic</td>
            <td className="p-2 border border-gray-300">3GB</td>
            <td className="p-2 border border-gray-300">Apple GPU (4 core)</td>
            <td className="p-2 border border-gray-300">64GB</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="p-2 border border-gray-300">Naples</td>
            <td className="p-2 border border-gray-300">In commission</td>
            <td className="p-2 border border-gray-300">Apple iPad Air 4</td>
            <td className="p-2 border border-gray-300">Apple iPadOS 18.0 Beta 8</td>
            <td className="p-2 border border-gray-300">Apple A14 Bionic</td>
            <td className="p-2 border border-gray-300">4GB</td>
            <td className="p-2 border border-gray-300">Apple GPU (4 core)</td>
            <td className="p-2 border border-gray-300">256GB</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="p-2 border border-gray-300">Turin</td>
            <td className="p-2 border border-gray-300">Decommissioned</td>
            <td className="p-2 border border-gray-300">Apple iPad Air 1</td>
            <td className="p-2 border border-gray-300">Apple iOS 12.5.7</td>
            <td className="p-2 border border-gray-300">Apple A7</td>
            <td className="p-2 border border-gray-300">1GB</td>
            <td className="p-2 border border-gray-300">PowerVR G6430</td>
            <td className="p-2 border border-gray-300">16GB</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="p-2 border border-gray-300">Florence</td>
            <td className="p-2 border border-gray-300">Decommissioned</td>
            <td className="p-2 border border-gray-300">Microsoft Lumia 950 XL</td>
            <td className="p-2 border border-gray-300">Microsoft Windows 10 Mobile 1703</td>
            <td className="p-2 border border-gray-300">Qualcomm MSM8994 Snapdragon 810</td>
            <td className="p-2 border border-gray-300">3GB</td>
            <td className="p-2 border border-gray-300">Adreno 430</td>
            <td className="p-2 border border-gray-300">32GB</td>
          </tr>
        </tbody>
      </table>
      <br /><br />
      <b className="text-blue-600">Stay tuned for more updates!</b>
      <br /><br />
      <hr className="my-6 border-gray-300" />
      <br /><br />
      <p className="text-sm">
        <a href="/" className="text-blue-600 hover:underline" title="Head back home">Root </a>
        |
        <a href="https://github.com/aervnu/aervnu.moe" className="text-blue-600 hover:underline" title="Source code of this site"> Source </a>
        |
        <a href="/clock" className="text-blue-600 hover:underline" title="Real time system clock"> Clock </a>
        |
        <a className="text-blue-600 hover:underline font-bold" href=".devices" title="Current page"> Devices </a>
        |
        <a href="https://hastebin.aervnu.moe" className="text-blue-600 hover:underline" title="All you can paste"> Starbin </a>
        |
        <span className="text-gray-600" title="Coming soon."> Stay tuned.</span>
        <br /><br />
        Photo by <a href="https://unsplash.com/@iamsantiago" className="text-blue-600 hover:underline">Santiago Gomez</a> on <a href="https://unsplash.com/photos/snow-capped-mountain-at-night-time-with-moon-WpZmGDzOAi0" className="text-blue-600 hover:underline">Unsplash</a>
      </p>
    </div>
  )
}

export default page