<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useSignupStore } from '../../stores/auth/signup'
</script>

<template>
  <TransitionRoot as="template" :show="useSignupStore().tos">
    <Dialog as="div" class="relative z-40" @close="useSignupStore().setTos()">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/5 backdrop-blur-lg transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left transition-all sm:w-[48rem]"
            >
              <section
                class="flex flex-col gap-10 p-10 rounded-3xl w-full max-h-[90vh] overflow-scroll"
              >
                <DialogTitle class="flex flex-col gap-2">
                  <h1 class="text-2xl">Terms and Conditions for AuxHive</h1>
                </DialogTitle>

                <pre class="whitespace-pre-wrap">
Welcome to AuxHive!
These terms and conditions ("Terms") govern your use of the AuxHive auction website ("Site") and any services provided by AuxHive ("we," "us," or "our"). By registering on the AuxHive website, you agree to comply with these Terms. Please read them carefully.

1. Acceptance of Terms
By registering on the AuxHive website, you affirm that you are at least 18 years old and legally capable of entering into a binding agreement. If you do not agree to these Terms, please do not use the Site.

2. Account Registration
2.1 You must create an account on AuxHive to participate in auctions.
2.2 You agree to provide accurate and complete information during the registration process.
2.3 You are responsible for maintaining the confidentiality of your account information, including your username and password.
2.4 You are responsible for all activities that occur under your account. If you suspect any unauthorized use of your account, you must notify us immediately.

3. Auction Process
3.1 AuxHive acts as an online platform connecting buyers and sellers for auction transactions.
3.2 The Site allows registered users to bid on and purchase items listed by sellers.
3.3 We reserve the right to remove, modify, or suspend any auction listing or cancel any bid at our discretion.
3.4 All bids are binding. By placing a bid, you agree to purchase the item at the bid amount if you win the auction.
3.5 The highest bidder at the end of an auction is the winner.
3.6 The seller reserves the right to set a reserve price, which must be met or exceeded for the item to be sold.
3.7 Auction winners must complete the transaction by paying the winning bid amount within the specified timeframe.

4. Prohibited Activities
4.1 You must not engage in any illegal, fraudulent, or unauthorized activities on the Site.
4.2 You must not interfere with the proper functioning of the Site or its underlying systems.
4.3 You must not manipulate bidding processes or engage in any form of bid manipulation.
4.4 You must not circumvent or attempt to circumvent any security measures or access restrictions on the Site.
4.5 You must not use the Site to harass, threaten, or intimidate other users or engage in any form of offensive behavior.

5. Intellectual Property
5.1 The Site and its contents, including but not limited to text, graphics, logos, and software, are protected by copyright and other intellectual property laws.
5.2 You may not reproduce, distribute, modify, or create derivative works of any content on the Site without our prior written consent.

6. Privacy Policy
Your privacy is important to us. Our Privacy Policy explains how we collect, use, and disclose your personal information. By using the Site, you consent to the collection, use, and disclosure of your personal information in accordance with our Privacy Policy.

7. Disclaimer of Warranties
7.1 The Site and its services are provided on an "as is" and "as available" basis without any warranties, express or implied.
7.2 We do not guarantee the accuracy, completeness, or reliability of any content on the Site.
7.3 We do not endorse, warrant, or guarantee the quality, safety, or legality of any items listed or sold on the Site.
7.4 You use the Site at your own risk. We are not liable for any damages or losses resulting from your use of the Site or any transactions conducted through it.

8. Limitation of Liability
To the fullest extent permitted by law, we are not liable for any indirect, incidental, consequential, or punitive damages arising out of or related to your use of the Site or any transactions conducted through it.

9. Indemnification
You agree to indemnify, defend, and hold us harmless from any claims, damages, losses, liabilities, and expenses arising out of or related to your use of the Site or any violation of these Terms.

10. Modifications to the Terms
We reserve the right to modify or update these Terms at any time. We will notify you of any material changes to these Terms. Your continued use of the Site after the changes become effective constitutes your acceptance of the modified Terms.

11. Termination
We reserve the right to suspend or terminate your account and access to the Site at our discretion, with or without cause, and without prior notice.

12. Governing Law
These Terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of India.
                </pre>

                <button
                  @click="useSignupStore().tos = false"
                  class="self-end flex justify-center items-center rounded-md bg-gray-800 px-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline-none mt-4"
                >
                  Agree & Continue
                </button>
              </section>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
